"use client";

import React, { useState } from "react";
import {
  Target,
  Users,
  TrendingUp,
  BookOpen,
  Heart,
  Award,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export default function ImperialMasterRoadmap() {
  const [activeYear, setActiveYear] = useState(1);
  const [completedMilestones, setCompletedMilestones] = useState<string[]>([]);

  const rangos = [
    {
      name: "Sales Master",
      year: "Año 1",
      pv: "2,400,000 PV",
      req: "2 piernas activas",
      income: "$2,000-4,000/mes",
      color: "bg-blue-500",
    },
    {
      name: "Diamond Master",
      year: "Año 1-2",
      pv: "2,400,000 PV",
      req: "2 Sales Masters",
      income: "$4,000-7,000/mes",
      color: "bg-cyan-500",
    },
    {
      name: "Sharon-Rose Master",
      year: "Año 2-3",
      pv: "2,400,000 PV",
      req: "2 Diamond Masters",
      income: "$7,000-15,000/mes",
      color: "bg-pink-500",
    },
    {
      name: "Star Master",
      year: "Año 3-4",
      pv: "2,400,000 PV",
      req: "2 Sharon-Rose + 3 calificaciones",
      income: "$15,000-25,000/mes",
      color: "bg-yellow-500",
    },
    {
      name: "Royal Master",
      year: "Año 4-5",
      pv: "2,400,000 PV",
      req: "2 Star Masters + 3 calificaciones",
      income: "$25,000-45,000/mes",
      color: "bg-purple-500",
    },
    {
      name: "Crown Master",
      year: "Año 5-6",
      pv: "2,400,000 PV",
      req: "2 Royal Masters + 3 calificaciones",
      income: "$45,000+/mes",
      color: "bg-orange-500",
    },
    {
      name: "IMPERIAL MASTER",
      year: "Año 7",
      pv: "2,400,000 PV",
      req: "2 Crown Masters + 3 calificaciones",
      income: "$1,000,000 cash + beneficios",
      color: "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500",
    },
  ];

  const estrategias = {
    1: {
      title: "FUNDACIÓN - Construir tu Base",
      focus: "🎯 Mentalidad & Primeros Pasos",
      actions: [
        "Convertirte en cliente fiel de Atomy (usar todos los productos)",
        "Crear tu lista de 100 contactos naturales",
        "Dominar la presentación de productos en 5 minutos",
        "Patrocinar 2-5 personas serias este año",
        "Estudiar: 'Cómo ganar amigos e influir' + 'Go Pro'",
        "Asistir a todos los eventos y entrenamientos de Atomy",
        "Meta: Alcanzar Sales Master",
      ],
    },
    2: {
      title: "DUPLICACIÓN - Enseñar lo Simple",
      focus: "👥 Sistema de Formación",
      actions: [
        "Crear sistema simple de 3 pasos para tu equipo",
        "Entrenar a tus 2 primeros líderes hasta Diamond",
        "Hacer seguimiento semanal con cada líder emergente",
        "Organizar eventos pequeños en casa (10-15 personas)",
        "Crear grupo de WhatsApp activo y motivador",
        "Leer: 'Redes de Liderazgo' + 'Romper el Hielo'",
        "Meta: Diamond Master con 2 Sales activos",
      ],
    },
    3: {
      title: "LIDERAZGO - Formar Formadores",
      focus: "🔥 Cultura de Duplicación",
      actions: [
        "Identificar y desarrollar 4-6 líderes potenciales",
        "Crear contenido educativo (videos, guías cortas)",
        "Establecer rituales de equipo (reuniones semanales)",
        "Enseñar a tus líderes a formar sus propios líderes",
        "Viajar a eventos nacionales de Atomy",
        "Leer: '21 Leyes del Liderazgo' + 'Hábitos Atómicos'",
        "Meta: Sharon-Rose Master",
      ],
    },
    4: {
      title: "EXPANSIÓN - Alcance Exponencial",
      focus: "🚀 Crecimiento Geométrico",
      actions: [
        "Trabajar con 2 líneas fuertes hacia Star Master",
        "Implementar sistema de reconocimiento en tu equipo",
        "Crear materiales de marketing propios (testimonios)",
        "Desarrollar speakers dentro de tu organización",
        "Mantener 3 calificaciones consecutivas para Star",
        "Mentoría personal con un Imperial Master existente",
        "Meta: Star Master (mantener 3 veces)",
      ],
    },
    5: {
      title: "CONSOLIDACIÓN - Profundidad y Estabilidad",
      focus: "💎 Liderazgo Magnético",
      actions: [
        "Enfocarte en desarrollar 2 líneas hacia Royal",
        "Crear academia de formación para tu red",
        "Invertir en tu marca personal (redes sociales)",
        "Conectar con líderes globales de Atomy",
        "Ser mentor de 10+ líderes activos",
        "Mantener 3 calificaciones para Royal Master",
        "Meta: Royal Master",
      ],
    },
    6: {
      title: "MAESTRÍA - Legado en Construcción",
      focus: "👑 Sistema Auto-sostenible",
      actions: [
        "Desarrollar 2 líneas hacia Crown Master",
        "Crear eventos masivos (100+ personas)",
        "Delegar operaciones, enfocarte en visión",
        "Escribir tu historia de éxito para inspirar",
        "Ser speaker en eventos oficiales de Atomy",
        "Mantener 3 calificaciones para Crown",
        "Meta: Crown Master",
      ],
    },
    7: {
      title: "IMPERIAL - El Sueño Cumplido",
      focus: "⭐ Máximo Rango",
      actions: [
        "Llevar 2 Crown Masters a la cima contigo",
        "Crear cultura de excelencia en toda tu red",
        "Ser ejemplo viviente de los valores Atomy",
        "Mantener 3 calificaciones finales",
        "Preparar discurso de Imperial Master",
        "Celebrar con tu familia el logro de 7 años",
        "Meta: IMPERIAL MASTER 🏆",
      ],
    },
  };

  const pilares = [
    {
      icon: Heart,
      title: "Familia Primero",
      desc: "Tu familia es tu porqué. Todo esfuerzo es para darles mejor vida.",
    },
    {
      icon: Users,
      title: "Duplicación",
      desc: "No importa lo que funcione, importa lo que se duplica.",
    },
    {
      icon: BookOpen,
      title: "Aprendizaje",
      desc: "Lee 1 libro al mes. Los líderes son lectores eternos.",
    },
    {
      icon: Target,
      title: "Enfoque",
      desc: "7 años de consistencia diaria. No semanas de intensidad.",
    },
  ];

  const toggleMilestone = (year: number, index: number) => {
    const key = `${year}-${index}`;
    setCompletedMilestones((prev: string[]) =>
      prev.includes(key)
        ? prev.filter((k: string) => k !== key)
        : [...prev, key]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
            🏆 MI CAMINO A IMPERIAL MASTER
          </h1>
          <p className="text-xl text-gray-300">
            Plan Estratégico 2025-2032 | ATOMY
          </p>
          <div className="mt-4 inline-block bg-white/10 rounded-full px-6 py-2">
            <span className="text-2xl font-bold text-yellow-400">
              Meta: 7 Años
            </span>
          </div>
        </div>

        {/* Visión Personal */}
        <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl p-6 mb-8 border border-purple-500/50">
          <div className="flex items-start gap-4">
            <Heart className="w-12 h-12 text-pink-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Mi Porqué</h2>
              <p className="text-lg text-gray-200">
                Soy esposo y padre feliz. Dejé la docencia para cuidar a mi
                familia. La música despertó mi pasión, pero ATOMY encendió mis
                sueños.
                <span className="text-yellow-300 font-semibold">
                  {" "}
                  Este es mi momento de servir, liderar y alcanzar la cima.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Pilares Fundamentales */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {pilares.map((pilar, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <pilar.icon className="w-8 h-8 text-purple-400 mb-2" />
              <h3 className="font-bold mb-1">{pilar.title}</h3>
              <p className="text-sm text-gray-400">{pilar.desc}</p>
            </div>
          ))}
        </div>

        {/* Línea de Tiempo de Rangos */}
        <div className="bg-white/5 backdrop-blur rounded-xl p-6 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />
            Progresión de Rangos
          </h2>
          <div className="space-y-3">
            {rangos.map((rango, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-black/20 rounded-lg p-4"
              >
                <div
                  className={`w-12 h-12 rounded-full ${rango.color} flex items-center justify-center text-2xl font-bold flex-shrink-0`}
                >
                  {idx + 1}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-lg">{rango.name}</h3>
                    <span className="text-xs bg-purple-500/30 px-2 py-1 rounded">
                      {rango.year}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {rango.pv} | {rango.req} |{" "}
                    <span className="text-green-400">{rango.income}</span>
                  </div>
                </div>
                {idx < rangos.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selector de Año */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {[1, 2, 3, 4, 5, 6, 7].map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-6 py-3 rounded-lg font-bold transition-all flex-shrink-0 ${
                activeYear === year
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 scale-105 shadow-lg"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              Año {year}
            </button>
          ))}
        </div>

        {/* Estrategia del Año Activo */}
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/50">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-10 h-10 text-yellow-400" />
            <div>
              <h2 className="text-3xl font-bold">
                {estrategias[activeYear as keyof typeof estrategias].title}
              </h2>
              <p className="text-lg text-purple-300">
                {estrategias[activeYear as keyof typeof estrategias].focus}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {estrategias[activeYear as keyof typeof estrategias].actions.map(
              (action: string, idx: number) => {
                const isCompleted = completedMilestones.includes(
                  `${activeYear}-${idx}`
                );
                return (
                  <div
                    key={idx}
                    onClick={() => toggleMilestone(activeYear, idx)}
                    className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-all ${
                      isCompleted
                        ? "bg-green-600/30 border-green-500/50"
                        : "bg-black/30 hover:bg-black/40"
                    } border border-white/10`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                      ) : (
                        <div className="w-6 h-6 rounded-full border-2 border-white/30" />
                      )}
                    </div>
                    <p
                      className={`text-lg ${
                        isCompleted ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {action}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* Recordatorio Final */}
        <div className="mt-8 bg-gradient-to-r from-yellow-600/20 to-red-600/20 rounded-xl p-6 border-2 border-yellow-500/50">
          <h3 className="text-2xl font-bold mb-3 text-yellow-300">
            🔥 Recuerda Siempre:
          </h3>
          <ul className="space-y-2 text-lg">
            <li>
              ✅ <strong>Consistencia</strong> vence al talento
            </li>
            <li>
              ✅ <strong>Duplicación</strong> es la clave del crecimiento
              exponencial
            </li>
            <li>
              ✅ <strong>Servir</strong> a otros te llevará a la cima
            </li>
            <li>
              ✅ <strong>Tu familia</strong> es tu combustible diario
            </li>
            <li>
              ✅ <strong>7 años</strong> de enfoque inquebrantable = Imperial
              Master 👑
            </li>
          </ul>
        </div>

        {/* Footer Motivacional */}
        <div className="mt-6 text-center">
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
            &quot;Los sueños no tienen fecha de expiración. Los tuyos comienzan
            HOY.&quot;
          </p>
          <p className="text-gray-400 mt-2">
            - Tu viaje a Imperial Master 2025-2032 -
          </p>
        </div>
      </div>
    </div>
  );
}
