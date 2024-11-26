import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const Services = () => {

    return (
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
          <div className="mx-auto aspect-[1155/678] h-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
        </div>
        <div className="mx-auto text-center">
          <h2 className="font-semibold text-8xl text-bit-bee-yellow mb-8">
          Projetos</h2>
          <p className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 ">Transforme suas ideias com nossas soluções inovadoras. Vamos encontrar a melhor opção para você!</p>
        </div>

          <div className="mx-auto mt-16 grid max-w-lg  items-center  sm:mt-20 sm:gap-y-0 lg:max-w-6xl lg:grid-cols-4 gap-4 ">
          
          {/* <!-- card 1--> */}
          <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-md sm:p-10 lg:mx-0 lg:rounded-3xl transition-all duration-300 hover:bg-black hover:bg-opacity-80 hover:text-white hover:scale-105">
            <h3 id="tier-hobby" className="flex justify-center text-3xl font-semibold text-indigo-600 ">BeeSpot</h3>
            <p className="mt-6 text-base/7 transition-colors duration-500 hover:text-white">Transforme seu Wi-Fi em uma poderosa ferramenta de marketing e engajamento.</p>
            <ul role="list" className="mt-8 space-y-3 text-sm/6  sm:mt-10">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Maior visibilidade
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Engajamento com cliente
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Análises avançadas
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Suporte 24 horas
              </li>
            </ul>
            <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">Entrar em contato</a>
          </div>

          {/* <!-- card 2--> */}
          <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-md sm:p-10 lg:mx-0 lg:rounded-3xl transition-all duration-300 hover:bg-black hover:bg-opacity-80 hover:text-white hover:scale-105">
            <h3 id="tier-hobby" className="flex justify-center text-3xl font-semibold text-indigo-600 ">Magazine</h3>
            <p className="mt-6 text-base/7  ">O Magazine digitaliza conteúdos, inovando a interação para marketing e comunicação corporativa.</p>
            <ul role="list" className="mt-8 space-y-3 text-sm/6  sm:mt-10">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Inovação Digital
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400 "viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Comunicação Interativa
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Marketing de Impacto
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Suporte 24 horas
              </li>
            </ul>
            <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">Entrar em contato</a>
          </div>

          {/* <!-- card 3--> */}
          <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-md sm:p-10 lg:mx-0 lg:rounded-3xl transition-all duration-300 hover:bg-black hover:bg-opacity-80 hover:text-white hover:scale-105">
            <h3 id="tier-hobby" className="flex justify-center text-3xl font-semibold text-indigo-600 ">Semear</h3>
            <p className="mt-6 text-base/7 ">Semear apoia mulheres a superarem desafios e reconquistarem sua autonomia profissional.</p>
            <ul role="list" className="mt-8 space-y-3 text-sm/6  sm:mt-10">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Encontre oportunidades
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Transformação de Vida
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Autonomia Profissional
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Suporte Personalizado
              </li>
            </ul>
            <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">Entrar em contato</a>
          </div>

          {/* <!-- card 4--> */}

          <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-md sm:p-10 lg:mx-0 lg:rounded-3xl transition-all duration-300 hover:bg-black hover:bg-opacity-80 hover:text-white hover:scale-105">
            <h3 id="tier-hobby" className="flex justify-center text-3xl font-semibold text-indigo-600 ">E-AGC</h3>
            <p className="mt-6 text-base/7 ">E-AGC oferece soluções para assembleias virtuais com segurança e facilidade.</p>
            <ul role="list" className="mt-8 space-y-3 text-sm/6  sm:mt-10">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Assembléias onlines
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Votações em tempo real
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Segurança nas reuniões
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                Suporte 24 horas
              </li>
            </ul>
            <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">Entrar em contato</a>
          </div>


        
        </div>
      </div>
)};
export default Services;

