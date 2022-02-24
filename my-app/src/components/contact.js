const Contact = {
    render() {
        return /* html */`
        <section>
        <div class="mt-2 max-w-7xl m-auto">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Liên hệ</h2>
        </div>
        <div class="grid grid-cols-2 max-w-7xl m-auto h-screen py-16">
            <div>
                <form class="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-first-name">
                                First Name
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name" type="text" placeholder="Jane">
                            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-last-name">
                                Last Name
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name" type="text" placeholder="Doe">
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-password">
                                E-mail
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="email" type="email">
                            <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-password">
                                Message
                            </label>
                            <textarea
                                class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                id="message"></textarea>
                            <p class="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none /
                                resize-y / resize-x / resize</p>
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3">
                            <button
                                class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button">
                                Send
                            </button>
                        </div>
                        <div class="md:w-2/3"></div>
                    </div>
                </form>
            </div>
            <div>
                <iframe class="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29799.513999340863!2d105.79962674745764!3d20.99507217173527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac927ce95957%3A0xe230355f8983adb9!2zVGhhbmggWHXDom4sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1642351426875!5m2!1svi!2s"
                    style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </section>
        `;
    },
};
export default Contact;