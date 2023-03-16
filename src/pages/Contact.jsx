import React from 'react'

function Contact() {
	return (
		<>
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Contact
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi cupiditate harum consequatur natus veniam non culpa, velit molestias quasi quas odio deleniti itaque quae laudantium quam reiciendis iure iusto sunt?
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Get started
						</a>
						<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
							Learn more <span aria-hidden="true">→</span>
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact