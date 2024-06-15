// @ts-nocheck
import { useSearchContext } from "@/context/search.context";
import { useForm } from "react-hook-form";

export const SearchBar = () => {
  //   hook form methods
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   search context
  const { setResults, setHasSearched } = useSearchContext();

  const onSubmit = async (data: any) => {
    try {
      await fetch(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${data.search}&apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setResults(data.data.results);
        });
      setHasSearched(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="" {...register("search")} />

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
