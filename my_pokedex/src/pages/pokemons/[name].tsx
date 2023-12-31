import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { moreDetaislOfPokemon } from "@/assets/indext";
import Image from "next/image";
import SeoOptimization from "@/components/SEO/seoOptimization";

export interface AllDetails {
  weight: string;
  order: string;
  height: string;
  base_experience: string;
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
}

const initialDetails: AllDetails = {
  weight: "string",
  order: "string",
  height: "string",
  base_experience: "string",
  abilities: [
    {
      ability: {
        name: "string",
      },
    },
  ],
};

const SaibaMais = () => {
  const [imageOfPokemon, setImageOfPokemon] = useState<string>("");
  const [types, setTypes] = useState<any[]>([]);
  const [allDetails, setAllDetails] = useState<AllDetails>(initialDetails);
  const [skills, setSkills] = useState<any[]>([]);

  const router = useRouter();
  const name = typeof router.query.name === "string" ? router.query.name : "";

  useEffect(() => {
    moreDetaislOfPokemon(
      name,
      setImageOfPokemon,
      setAllDetails,
      setTypes,
      setSkills
    );
  }, [name]);

  const backFunction = () => {
    router.push("/");
  };

  return (
    <SeoOptimization title="Pokémon" description="Pokémon skills and power" path={`/${name}`}>

      <div className={`bg-orange-100 flex flex-col sm:h-full lg:h-screen `}>
        <div className={`flex p-8`}>
          <button
            onClick={() => backFunction()}
            className={`bg-blue-400 text-white font-semibold py-2 px-4 rounded shadow-sm hover:shadow-xl h-10`}
          >
            Voltar
          </button>

        </div>
        <main
          className={` h-full flex sm:flex-col lg:flex-row  justify-around items-center min-w-screen sm:gap-8 lg:gap-3 p-4`}
        >
          <div
            className={` border-b-4 border-b-orange-700 rounded-b-md w-96 h-96`}
          >
            <Image
              src={imageOfPokemon}
              alt="Imagem não disponível"
              width={400}
              height={400}
            />
          </div>

          <div
            className={` flex flex-col bg-gradient-to-t from-red-500 to-orange-100 items-center justify-center border-t-2 border-red-500 rounded-full w-96 h-96 `}
          >
            <div
              className={` text-white flex flex-col gap-3 font-serif text-lg `}
            >
              <span>Nome: {name} </span>
              <span>Peso: {allDetails.weight} lb </span>
              <span>Ordem: {allDetails.order} </span>
              <span>Altura: {allDetails.height} ft </span>
              <span>Experiência: {allDetails.base_experience} </span>
            </div>
          </div>

          <div
            className={`flex flex-col bg-gradient-to-b from-yellow-500 to-orange-100 items-center justify-center border-b-2 border-yellow-500 rounded-full w-96 h-96`}
          >
            <div
              className={` flex flex-col items-center gap-3 font-serif text-lg`}
            >
              <span
                className={` flex  flex-col justify-center items-start border-b-4  p-2 rounded-md w-80`}
              >
                Habilidades:
                <ol className={`flex flex-col gap-1`}>
                  {skills.map((skill, index) => (
                    <li key={index}>{skill.ability.name}</li>
                  ))}
                </ol>
              </span>

              <span
                className={`flex  flex-col justify-center items-end p-2 rounded-md w-80`}
              >
                Tipos:
                <ol className={`flex flex-col gap-1 `}>
                  {types.map((type, index) => (
                    <li key={index}>{type.type.name}</li>
                  ))}
                </ol>
              </span>
            </div>
          </div>
        </main>
      </div>
    </SeoOptimization>
  );
};

export default SaibaMais;
