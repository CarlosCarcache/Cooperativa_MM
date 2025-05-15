"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  Menu,
  X,
  ArrowRight,
  Coffee,
  Wheat,
  Leaf,
  Lightbulb,
  CheckCircle,
  Target,
  History,
  Instagram,
} from "lucide-react"
import TikTokIcon from "./components/tiktok-icon"
import "./styles.css"
// Importamos los datos de la cooperativa
import cooperativaData from "./data/cooperativa.json"

export default function Home() {
  // Estados para la interfaz
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("todos")
  const [isScrolled, setIsScrolled] = useState(false)

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Extraemos datos del JSON para facilitar su uso
  const { nombre, siglas, ubicacion, logo } = cooperativaData.informacionGeneral
  const { mision, vision } = cooperativaData.misionVision
  const { general: objetivoGeneral, especificos: objetivosEspecificos } = cooperativaData.objetivos
  const { titulo: tituloEnfoque, descripcion: descripcionEnfoque } = cooperativaData.enfoqueAgroecologico
  const { lema, productos } = cooperativaData.propuestaValor
  const { rubros, comercializacion } = cooperativaData.alcanceProduccion
  const { aniosExperiencia, productosOrganicos, clientesSatisfechos } = cooperativaData.estadisticas

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="relative h-14 w-14 overflow-hidden rounded-full">
              <Image
                src={logo || "/placeholder.svg"}
                alt="Logo COMUTRADI"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-amber-800">{siglas}</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {/* Generamos los enlaces de navegación basados en los rubros */}
              {rubros.map((rubro, index) => (
                <li key={index}>
                  <Link
                    href={`#${rubro.nombre.toLowerCase()}`}
                    className="text-sm font-medium text-amber-800 hover:text-amber-600 transition"
                  >
                    {rubro.nombre}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#mision" className="text-sm font-medium text-amber-800 hover:text-amber-600 transition">
                  Misión
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="rounded-full bg-amber-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-700 transition shadow-sm"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          <button className="block md:hidden text-amber-800" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <div className="container mx-auto px-4 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image
                      src={logo || "/placeholder.svg"}
                      alt="Logo COMUTRADI"
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xl font-bold text-amber-800">{siglas}</span>
                </div>
                <button className="text-amber-800" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="mt-10">
                <ul className="flex flex-col gap-6">
                  {/* Generamos los enlaces de navegación móvil basados en los rubros */}
                  {rubros.map((rubro, index) => (
                    <li key={index}>
                      <Link
                        href={`#${rubro.nombre.toLowerCase()}`}
                        className="text-lg font-medium text-amber-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {rubro.nombre}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="#mision"
                      className="text-lg font-medium text-amber-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Misión
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      href="#contacto"
                      className="inline-block rounded-full bg-amber-800 px-6 py-3 text-base font-medium text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section - Modern Compact Design */}
        <section className="relative py-16 overflow-hidden bg-white border-b border-gray-100">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-50/50 clip-path-hero"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl"></div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-5 relative z-10">
                <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 mb-6">
                  {lema}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">{nombre}</h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">{cooperativaData.constitucion.descripcion}</p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#productos"
                    className="group rounded-full bg-amber-800 px-6 py-3 font-medium text-white transition-all hover:bg-amber-700 shadow-sm"
                  >
                    Explorar Productos
                    <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="#contacto"
                    className="rounded-full border-2 border-amber-800 px-6 py-3 font-medium text-amber-800 transition-all hover:bg-amber-50"
                  >
                    Contactar
                  </Link>
                </div>
              </div>

              {/* Right Images - Modern Grid Layout */}
              <div className="lg:col-span-7 relative">
                <div className="grid grid-cols-6 grid-rows-5 gap-3 h-[400px]">
                  {/* Usamos las imágenes de los productos principales */}
                  <div className="col-span-4 row-span-5 rounded-2xl overflow-hidden shadow-lg relative">
                    <Image src="/img/cafe-cosecha.png" alt="Cosecha de Café" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-amber-800">
                      Café de Altura
                    </div>
                  </div>

                  {/* Usamos las imágenes de los rubros secundarios */}
                  <div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/img/miel-producto.png"
                      alt="Miel Pura"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="col-span-2 row-span-3 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/img/huertos-agroforestales.png"
                      alt="Huertos Agroforestales"
                      width={200}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Stats Bar - Usando datos de estadísticas */}
                <div className="mt-6 bg-white rounded-xl shadow-md p-4 flex justify-between items-center">
                  <div className="text-center px-4 border-r border-gray-200">
                    <p className="text-2xl font-bold text-amber-800">{aniosExperiencia}+</p>
                    <p className="text-xs text-gray-600">Años de experiencia</p>
                  </div>
                  <div className="text-center px-4 border-r border-gray-200">
                    <p className="text-2xl font-bold text-amber-800">{productosOrganicos}%</p>
                    <p className="text-xs text-gray-600">Productos orgánicos</p>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-2xl font-bold text-amber-800">{clientesSatisfechos}+</p>
                    <p className="text-xs text-gray-600">Clientes satisfechos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products - Usando datos de productos */}
        <section id="productos" className="py-24 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 mb-4">
                Productos Destacados
              </span>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Lo Que Producimos</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">{comercializacion}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Producto 1: Miel */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl border-t-4 border-amber-800 product-card">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/img/miel-producto.png"
                    alt="Miel Multifloral"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 product-image"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-amber-800 px-3 py-1 text-xs font-semibold text-white featured-product-badge">
                    3 Productoras
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-amber-900">Miel Multifloral</h3>
                  <p className="mb-4 text-gray-700">
                    Miel pura cosechada con buenas prácticas apícolas, garantizando calidad óptima y libre de peligros
                    físicos, químicos y microbiológicos.
                  </p>
                  <div className="flex justify-end">
                    <Link
                      href="#miel"
                      className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800 transition hover:bg-amber-100 nav-button"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>

              {/* Producto 2: Jamaica */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl border-t-4 border-amber-700 product-card">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/img/jamaica-producto.png"
                    alt="Jamaica"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 product-image"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-amber-700 px-3 py-1 text-xs font-semibold text-white featured-product-badge">
                    6 Productoras
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-amber-800">Jamaica</h3>
                  <p className="mb-4 text-gray-700">
                    Flor de jamaica cultivada orgánicamente, ideal para infusiones y bebidas refrescantes, rica en
                    antioxidantes y con propiedades medicinales.
                  </p>
                  <div className="flex justify-end">
                    <Link
                      href="#jamaica"
                      className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800 transition hover:bg-amber-100 nav-button"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>

              {/* Producto 3: Granos Básicos */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl border-t-4 border-amber-600 product-card">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/img/granos-basicos.png"
                    alt="Granos Básicos"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 product-image"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white featured-product-badge">
                    33 Productoras
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-amber-700">Granos Básicos</h3>
                  <p className="mb-4 text-gray-700">
                    Maíz, frijol y sorgo cultivados bajo prácticas agroecológicas, rescatando semillas criollas y
                    garantizando la soberanía alimentaria.
                  </p>
                  <div className="flex justify-end">
                    <Link
                      href="#granos"
                      className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-100 nav-button"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>

              {/* Producto 4: Huertos */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl border-t-4 border-amber-500 product-card">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/img/huertos-agroforestales.png"
                    alt="Huertos"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 product-image"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white featured-product-badge">
                    15 Productoras
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-amber-700">Huertos Biointensivos</h3>
                  <p className="mb-4 text-gray-700">
                    Huertos cultivados con técnicas biointensivas que maximizan la producción en espacios reducidos,
                    garantizando diversidad y nutrición.
                  </p>
                  <div className="flex justify-end">
                    <Link
                      href="#huertos"
                      className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-100 nav-button"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section - Usando datos de misión e imagen de tecnología */}
        <section id="mision" className="py-16 md:py-24 bg-amber-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="bg-amber-100 p-2 rounded-full inline-flex items-center mb-4">
                  <Lightbulb className="text-amber-800 h-5 w-5 mr-2" />
                  <span className="text-amber-800 font-medium">Nuestra Misión</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">Transformando el futuro agrícola</h2>
                <p className="text-gray-700 text-lg mb-6">{mision}</p>
                <ul className="space-y-3">
                  {/* Mostramos los objetivos específicos como puntos clave */}
                  {objetivosEspecificos.slice(0, 3).map((objetivo, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-amber-800 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{objetivo}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/img/mision-tecnologia.png"
                  alt="Misión ilustrada"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section - Usando datos de visión e imagen de visión */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2">
                <div className="bg-green-100 p-2 rounded-full inline-flex items-center mb-4">
                  <Target className="text-green-700 h-5 w-5 mr-2" />
                  <span className="text-green-700 font-medium">Nuestra Visión</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
                  Liderando la agricultura sostenible
                </h2>
                <p className="text-gray-700 text-lg mb-6">{vision}</p>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
                  <h3 className="font-bold text-lg mb-2 text-green-800">Nuestro objetivo para 2030</h3>
                  <p className="text-gray-700">
                    {cooperativaData.perfilCliente.caracteristicasDestacadas[0].descripcion}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/img/vision-agricultura.png"
                  alt="Visión ilustrada"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section - Usando datos de rubros */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 mb-4">
                Categorías
              </span>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Nuestras Categorías de Productos</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                {cooperativaData.alcanceProduccion.alcanceGeneral}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {/* Categoría 1: Miel */}
              <Link href="#miel" className="group category-card">
                <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/img/apicultura.png"
                    alt="Miel"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent category-overlay"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 2h6l3 7H6l3-7z" />
                        <path d="M6 9v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">Miel</h3>
                    <p className="mb-4 text-gray-200">Miel pura y natural con propiedades nutritivas excepcionales.</p>
                    <span className="inline-flex items-center text-sm font-medium text-white">
                      Explorar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 category-arrow" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Categoría 2: Jamaica */}
              <Link href="#jamaica" className="group category-card">
                <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/img/jamaica-producto.png"
                    alt="Jamaica"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent category-overlay"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                      <Leaf className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">Jamaica</h3>
                    <p className="mb-4 text-gray-200">Flor de jamaica para infusiones y bebidas refrescantes.</p>
                    <span className="inline-flex items-center text-sm font-medium text-white">
                      Explorar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 category-arrow" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Categoría 3: Granos Básicos */}
              <Link href="#granos" className="group category-card">
                <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/img/granos-basicos.png"
                    alt="Granos Básicos"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent category-overlay"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                      <Wheat className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">Granos Básicos</h3>
                    <p className="mb-4 text-gray-200">Maíz, frijol y sorgo cultivados con prácticas agroecológicas.</p>
                    <span className="inline-flex items-center text-sm font-medium text-white">
                      Explorar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 category-arrow" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Categoría 4: Huertos */}
              <Link href="#huertos" className="group category-card">
                <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/img/huertos-agroforestales.png"
                    alt="Huertos"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent category-overlay"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                      <Coffee className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">Huertos</h3>
                    <p className="mb-4 text-gray-200">Huertos biointensivos para la soberanía alimentaria.</p>
                    <span className="inline-flex items-center text-sm font-medium text-white">
                      Explorar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 category-arrow" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Enfoque Agroecológico - Usando datos del enfoque e imágenes reales */}
        <section id="enfoque" className="py-24 bg-[#f8f5f1]">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 mb-4">
                Enfoque Agroecológico
              </span>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">{tituloEnfoque}</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">{descripcionEnfoque}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Mostramos prácticas agroecológicas - Café */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/img/cafe-cosecha.png"
                    alt="Cosecha de Café"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 product-image"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white featured-product-badge">
                    Café
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-amber-800">Cosecha Sostenible de Café</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Nuestras socias cosechan café de manera tradicional, seleccionando manualmente los granos maduros
                    para garantizar la mejor calidad. Este proceso respeta los ciclos naturales de la planta y el
                    ecosistema.
                  </p>
                </div>
              </div>

              {/* Mostramos impacto social - Apicultura */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/img/apicultura.png"
                    alt="Apicultura"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 product-image"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white featured-product-badge">
                    Miel
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-amber-800">Apicultura Natural</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    La producción de miel se realiza respetando el ciclo natural de las abejas. Nuestras apicultoras
                    trabajan con métodos que garantizan la salud de las colmenas y la biodiversidad del entorno.
                  </p>
                </div>
              </div>

              {/* Mostramos principios cooperativos - Musáceas */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/img/musaceas.png"
                    alt="Cultivo de Musáceas"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 product-image"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white featured-product-badge">
                    Musáceas
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-amber-800">Cultivo de Musáceas</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    El cultivo de plátanos y otras musáceas se realiza bajo sistemas agroforestales que promueven la
                    biodiversidad y protegen el suelo de la erosión, creando un ecosistema equilibrado.
                  </p>
                </div>
              </div>
            </div>

            {/* Segunda fila con vivero */}
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="sm:col-start-2 group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/img/vivero.png"
                    alt="Vivero"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 product-image"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white featured-product-badge">
                    Vivero
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-amber-800">Vivero Orgánico</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Nuestro vivero produce plantas saludables y resistentes, cultivadas sin pesticidas químicos. Las
                    socias aplican técnicas de permacultura para crear un ecosistema equilibrado y sostenible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section - Después del enfoque agroecológico */}
        <section className="py-16 bg-amber-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <span className="inline-block rounded-full bg-amber-800 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-100 mb-4">
                  Nuestro Proceso
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Conoce nuestras prácticas agroecológicas</h2>
                <p className="text-amber-100 text-lg mb-6">
                  Descubre cómo nuestras socias implementan técnicas sostenibles que respetan el medio ambiente y
                  producen alimentos de alta calidad, manteniendo vivas las tradiciones ancestrales.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 text-amber-900 hover:bg-white transition-colors play-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </button>
                  <span className="font-medium">Ver el video completo</span>
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Placeholder para el video - En producción, reemplazar con un componente de video real */}
                  <div className="aspect-video bg-amber-800 video-background flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 to-transparent"></div>
                    <div className="relative z-10 text-center">
                      <button className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white/30 transition-colors play-button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5.14v14l11-7-11-7z" />
                        </svg>
                      </button>
                      <p className="mt-4 text-lg font-medium">Prácticas Agroecológicas en Acción</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Duración: 3:45</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                          </svg>
                        </button>
                        <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M23 12l-7-7v4H8a5 5 0 0 0-5 5v4h2v-4a3 3 0 0 1 3-3h8v4l7-7z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="rounded-lg overflow-hidden">
                      <img src="/img/cafe-cosecha.png" alt="Miniatura 1" className="w-full h-20 object-cover" />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img src="/img/apicultura.png" alt="Miniatura 2" className="w-full h-20 object-cover" />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img src="/img/musaceas.png" alt="Miniatura 3" className="w-full h-20 object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section - Usando datos de constitución */}
        <section className="py-16 md:py-24 bg-amber-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="bg-amber-100 p-2 rounded-full inline-flex items-center mb-4">
                <History className="text-amber-800 h-5 w-5 mr-2" />
                <span className="text-amber-800 font-medium">Nuestra Historia</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">
                Un viaje de innovación y crecimiento
              </h2>
              <p className="text-gray-700 text-lg">
                Desde nuestros humildes comienzos hasta convertirnos en líderes del sector, nuestra historia es un
                testimonio de perseverancia, innovación y compromiso.
              </p>
            </div>

            <div className="space-y-12 relative">
              <div className="timeline-line"></div>
              {[
                {
                  year: cooperativaData.constitucion.fecha.split(" ")[0],
                  title: "Fundación",
                  description: `Fundación de la cooperativa con ${cooperativaData.constitucion.miembrosIniciales} mujeres campesinas de la comunidad.`,
                },
                {
                  year: "2010",
                  title: "Crecimiento",
                  description: "Ampliación de nuestras áreas de cultivo y diversificación de productos.",
                },
                {
                  year: "2015",
                  title: "Consolidación",
                  description: "Fortalecimiento de la estructura cooperativa y desarrollo de nuevos mercados.",
                },
                {
                  year: "2023",
                  title: "Actualidad",
                  description: `Actualmente contamos con ${cooperativaData.estadisticas.sociosActivos} socias activas y seguimos creciendo.`,
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div className="timeline-dot" style={{ top: `${index * 25}%` }}></div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-amber-800 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    {milestone.year.substring(2)}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-amber-800">{milestone.year}</div>
                    </div>
                    <div className="font-bold text-xl mb-1 text-amber-900">{milestone.title}</div>
                    <div className="text-gray-700">{milestone.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-amber-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full bg-white/90 p-1">
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt="Logo COMUTRADI"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{nombre}</h2>
                  <p className="text-amber-200 mt-2">{lema}</p>
                </div>
              </div>
              <div className="flex space-x-6">
                <a href="#contacto" className="hover:text-amber-200 transition-colors footer-link">
                  Contacto
                </a>
                <a href="#productos" className="hover:text-amber-200 transition-colors footer-link">
                  Productos
                </a>
                <a href="#mision" className="hover:text-amber-200 transition-colors footer-link">
                  Misión
                </a>
                <a href="#enfoque" className="hover:text-amber-200 transition-colors footer-link">
                  Enfoque
                </a>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 transition-all transform hover:scale-110 shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 transition-all transform hover:scale-110 shadow-md"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-6 w-6 text-white" />
              </a>
            </div>

            <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
              <p>
                &copy; {new Date().getFullYear()} {siglas}. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
