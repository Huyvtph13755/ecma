import axios from 'axios';
import { getAll } from '../api/posts';

const NewList = {
    async render() {
        const response = await getAll()
        return /* html */`
        <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Tin tức</h2>
            <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            ${response.data.map((post) => `
            <div class="group relative">
            <div
                class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img src="${post.img}"
                    alt="Front of men&#039;s Basic Tee in black."
                    class="w-full h-full object-center object-cover lg:w-full lg:h-full">
            </div>
            <div class="mt-4 flex justify-between">
                <div>
                    <h2 class="text-lg font-bold hover:text-orange-400 text-gray-700">
                        <a href="post/${post.id}">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${post.title}
                        </a>
                    </h2>
                    <p class="text-xs w-96 truncate">${post.desc}</p>
                </div>
            </div>
        </div>
            `).join("")}
            </div>
            </div>
        </div>
        `;
    },
};
export default NewList;