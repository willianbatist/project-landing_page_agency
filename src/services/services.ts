import example1 from "../img/example1.jpg";
import example2 from "../img/example2.jpg";
import example3 from "../img/example3.jpg";

export const apiProducts = [
  {
    id: 1,
    img: example1,
    name: "Conteúdo",
    tag: "Informação",
    description:
      "Nosso time de redatores está pronto para falar de todos assuntos relevantes ao seu negócio com muita criatividade.",
  },
  {
    id: 2,
    img: example2,
    name: "Fotos do seu produto",
    tag: "Imagem",
    description: "Uma boa apresentação é capaz de conquistar muito mais clientes.",
  },
  {
    id: 3,
    img: example3,
    name: "Consultoria",
    tag: "Gerenciamento",
    description: "Saber o que esperar daqui para frente é importante. Conte com nossa consultoria de negócios para alinhar as expectativas.",
  },
];

export const apiServices = [
  {
    id: 1,
    name:"Fotos profissionais",
    description: "Uma boa apresentação do seu produto faz a diferença.",
  },
  {
    id: 2,
    name:"Desenvolvimento de site",
    description: "Concentre as informações da sua empresa de forma profissional e atualizada.",
  },
  {
    id: 3,
    name:"Relatórios mensais",
    description: "Acompanhe seu investimento de forma precisa.",
  },
  {
    id: 4,
    name:"Planejamento estratégico",
    description: "Um plano completo com objetivos e prazos para sua empresa crescer.",
  },
  {
    id: 5,
    name:"Edição de vídeos",
    description: "O conteúdo em vídeo é produzido e editado por nós mesmos, diminuindo o custo e o prazo.",
  },
  {
    id: 6,
    name:"Social Listening",
    description: "Monitoramento das redes sociais com o SAC 3.0, para atender o seu cliente da melhor forma.",
  },
];

export const apiPricing = [
  {
    id: 1,
    name: "Starter kit",
    description: "Pacote ideal para você que está começando uma empresa e quer começar com o pé direito nas redes sociais.",
    item1: "Fotos dos produtos",
    item2: "Conteúdo mensal",
    item3: "Social Listening",
  },
  {
    id: 2,
    name: "Profissional",
    description: "Para sua empresa que já tem experiência e quer alcançar outros públicos.",
    item1: "Starter kit",
    item2: "Sac 3.0",
    item3: "Relatórios de performance",
  },
  {
    id: 3,
    name: "Avançado",
    price: "249",
    description: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
    item1: "kit Profissional",
    item2: "Relatórios de performance",
    item3: "Consultoria com especialista",
  }
];