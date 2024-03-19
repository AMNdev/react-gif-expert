import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["homer simpson", "kajhhsf"]);

  const onAddCategory = (newCategory) => {
    // setCategories(["nueva", ...categories]);
    // console.log(newCategory);
    // setCategories(cat=> [...cat,'nueva'])

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
        // onNewCategory={onAddCategory} es lo mismo
      />

      {
        categories.map((cat) => (
          <GifGrid key={cat} category={cat} />
          ))
      }
    </>
  );
};
