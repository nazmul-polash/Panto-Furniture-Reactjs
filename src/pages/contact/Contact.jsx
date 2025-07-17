import React from "react";
import heroImage from "../../assets/banner.png";

const Contact = () => {
   return (
      <>
         <section className="min-h-screen bg-gray-100">
            <div
               className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
               style={{ backgroundImage: `url(${heroImage})` }}
            >
               <h1 className="text-4xl font-bold">Contect Me</h1>
            </div>
            <div className="container max-w-screen-2xl mx-auto py-6 px-4">
               <h2 className="text-4xl font-bold text-center my-8">Contact</h2>

               <div>
                  <form action="#" class="space-y-8">
                     <div>
                        <label
                           for="email"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                           Your email
                        </label>
                        <input
                           type="email"
                           id="email"
                           class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                           placeholder="name@flowbite.com"
                           required
                        />
                     </div>
                     <div>
                        <label
                           for="subject"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                           Subject
                        </label>
                        <input
                           type="text"
                           id="subject"
                           class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                           placeholder="Let us know how we can help you"
                           required
                        />
                     </div>
                     <div class="sm:col-span-2">
                        <label
                           for="message"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                           Your message
                        </label>
                        <textarea
                           id="message"
                           rows="6"
                           class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                           placeholder="Leave a comment..."
                        ></textarea>
                     </div>
                     <button
                        type="submit"
                        class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                     >
                        Send message
                     </button>
                  </form>
               </div>
            </div>
         </section>
      </>
   );
};
export default Contact;
