import React from "react";

const Products = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-pink-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Most selling products of us</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Baking goods create such a heavy impact on our daily life without even screaming its presence! From humble bread to indulgent decadent chocolate pastries, this age-old technique has transcended generations, crafting timeless classics that captivate taste buds and nurture souls.</p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="./images/Pastry_img.jpg"></img>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Pastry</h2>
              <p className="text-base leading-relaxed mt-2">Pastry is a type of dough made with flour, water and shortening. Baked pastry dough can be sweet or savory, and consumed alone or with fillings. Pastry is characterized by its flaky and crumbly texture, and rich buttery flavor.</p>
              <a className="text-pink-500 inline-flex items-center mt-3">Learn More
                
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="./images/crepes_rolls.jpg"></img>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Strawberry Crepes</h2>
              <p className="text-base leading-relaxed mt-2">This Strawberry Crepes recipe is to die for and belongs on a restaurant brunch menu, but the best part is how EASY they are to make! We make them often on the weekends </p>
              <a className="text-pink-500 inline-flex items-center mt-3">Learn More
                
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="./images/pancake_img.jpg"></img>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Pancake</h2>
              <p className="text-base leading-relaxed mt-2">A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.</p>
              <a className="text-pink-500 inline-flex items-center mt-3">Learn More
                
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products