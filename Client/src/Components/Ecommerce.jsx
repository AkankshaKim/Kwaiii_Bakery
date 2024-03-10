import React from "react";
import Productshowcase from "./Productshowcase";

const Ecommerce = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">

                        <Productshowcase/>
                        <Productshowcase/>
                        <Productshowcase/>
                        <Productshowcase/>
                        <Productshowcase/>
                        <Productshowcase/>
                        <Productshowcase/>
                        <Productshowcase/>
                

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ecommerce