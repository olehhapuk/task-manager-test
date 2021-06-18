import React, { Component } from 'react'

export default class Footer extends Component {
  state={
  name:"",
  email:"",
  description:"",
};

habdleChange = (e) =>{
  this.setState({[e.target.name]: e.target.value});
  }
handleFormSubmit = (e)=>{
      e.preventDefault();
  } 

  render() {
    return (
      <div class="bg-black ">
      
      <section class="text-purple-900 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-6xl font-bold title-font mb-4 text-gray-400">Get in touch</h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">

                 <form onSubmit={this.handleFormSubmit}>
                 <label for="name" class="leading-7 text-sm text-gray-400">
                   <input  type="text"
                   placeholder='Enter name'
                   name="name"
                   value={this.state.name} 
                   onChange={this.habdleChange}
                   class="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-purple-800 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                   checked/>
                 </label>
                 </form>

                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">

                  <form onSubmit={this.handleFormSubmit}>
                  <label for="email" class="leading-7 text-sm text-gray-400">
                    <input  
                        type="email"
                        placeholder='Enter email'
                        name="email"
                        value={this.state.email}
                        onChange={this.habdleChange} 
                        class="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-purple-800 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        checked/>
                    </label>
                  </form>
                  
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
              <form onSubmit={this.handleFormSubmit}>
              <label for="message" class="leading-7 text-sm text-gray-400">
                    <textarea  name="description" 
                    id="" cols="30" 
                    placeholder='Enter message'
                    rows="10" 
                    value={this.state.description}
                    onChange={this.habdleChange} 
                    class="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-purple-800 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    checked></textarea>

                    </label>
              </form>
                  
                </div>
              </div>
              <div class="p-2 w-full">
                <button type="submit" class="flex mx-auto text-white bg-purple-800 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Submit</button>
              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a class="text-purple-500">our@email.com</a>
                <p class="leading-normal my-5">Name our group</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
              </div>
    )
  }
}