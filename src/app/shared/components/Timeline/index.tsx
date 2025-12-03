import { TimelineContainer, TimelineDate, TimelineSimpleContent } from "..";
import { TimelineContentWithImage } from "../TimelineContentWithImage";
import { StyledTimeline } from "./styles";
import { Fragment } from "react";
// import GeanSharly from "../../assets/speakers/gean-sharly.jpg";
import IuryGomes from "../../assets/speakers/prof-iury.png";
import CharlesJefferson from "../../assets/speakers/professor-charles.jpeg";
import HugoCristian from "../../assets/speakers/hugo-christian.png";

export function Timeline() {
  return (
    <StyledTimeline>
      {/* // ? DIA 04 / 12 */}
      <Fragment>
        <TimelineDate date="04 de dezembro de 2025" />

        <TimelineContainer hour="18:30 - 19:30">
          <TimelineSimpleContent
            title="Credenciamento"
            content="Entrega de crachás e materias."
            address="Área de Convivência (Bloco 2)"
          />
        </TimelineContainer>

        <TimelineContainer hour="19:30 - 19:40" right>
          <TimelineSimpleContent
            title="Cerimônia de Abertura"
            content="Boas vindas e Apresentação do evento."
            address="Área de Convivência (Bloco 2)"
          />
        </TimelineContainer>

        <TimelineContainer hour="19:50 - 20:30">
          <TimelineContentWithImage
            title="💻 Palestra de Abertura: Ética e Responsabilidade no uso da IA"
            image={HugoCristian}
            name="  Hugo Cristian"
            about_name="Gestor de desenvolvimento de software Nortesys"
            description="Resumo: A inteligência artificial (IA) está transformando rapidamente diversos setores, trazendo benefícios significativos, mas também levantando questões éticas importantes. Nesta palestra, exploraremos os princípios fundamentais da ética na IA, discutindo temas como viés algorítmico, privacidade dos dados e responsabilidade social. Abordaremos como desenvolvedores, empresas e usuários podem colaborar para garantir que a IA seja utilizada de maneira justa, transparente e benéfica para toda a sociedade."
            address="Área de Convivência (Bloco 2)"
            womanSpeaker={false}
            />
        </TimelineContainer>

        <TimelineContainer hour="20:40 - 21:20" right>
          <TimelineContentWithImage
            title="💻 Inovação no IFTO Campus Araguaína: Como a Metodologia do LabSIS Impulsionou a Premiação dos Projetos UpGrade e LembreMED"
            image={IuryGomes}
            name="Iury Gomes de Oliveira"
            about_name="Mestre em Ciência da Computação, Programador e Professor do IFTO Campus Araguaína"
            description="Resumo: Nesta palestra, exploraremos como a metodologia inovadora do Laboratório de Sistemas de Informação e Software (LabSIS) do IFTO Campus Araguaína tem sido fundamental para o sucesso de projetos como o UpGrade e LembreMED. Discutiremos as abordagens adotadas, os desafios enfrentados e as soluções criativas desenvolvidas que levaram esses projetos a serem reconhecidos e premiados. Venha descobrir como a inovação e a colaboração acadêmica podem transformar ideias em realidade e impactar positivamente a sociedade."
            address="Área de Convivência (Bloco 2)"
          />
        </TimelineContainer>


         <TimelineContainer hour="21:20 - 21:50" right>
          <TimelineContentWithImage
            title="💻 Palestra: Saúde 4.0: Indicadores em Tempo Real com Blockchain"
            image={CharlesJefferson}
            name="Charles Jefferson Rodrigres Alves"
            about_name="Doutorando em Engenharia de Produção e Sistemas, Me. Modelagem Computacional e Bsc. Análise de Sistemas"
            description="Resumo: Uma visão estratégica da saúde digital: transformar dados hospitalares fragmentados em indicadores confiáveis e em tempo real. Uma abordagem prática inovadora que fortalece decisões clínicas e gerenciais, promovendo mais segurança, agilidade e transparência por meio das tecnologias da Saúde 4.0."
            address="Área de Convivência (Bloco 2)"
          />
        </TimelineContainer>

        <TimelineContainer hour="21:50 - 22:30">
          <TimelineSimpleContent
            title="☕ Coffee Break."
            content={`Visita aos estandes`}
            address="Área de Convivência (Bloco 2)"
          />
        </TimelineContainer>
      </Fragment>

      {/* // ? DIA 05 / 12 */}
      <Fragment>
        <TimelineDate date="05 de dezembro de 2025" color="secondary" />

        <TimelineContainer hour="13:00 - 14:00" color="secondary">
          <TimelineSimpleContent
            title="👨🏻‍💻 Orientações para o Torneio de Programação"
            content="Limite de 20 vagas."
            address="Laboratório 2"
          />
        </TimelineContainer>

        <TimelineContainer hour="14:00 - 17:00" right color="secondary">
          <TimelineContentWithImage
            course={true}
            title="🖲️ Minicurso: Introdução ao Arduíno"
            image=""
            name="Juan Felipe"
            about_name="Dev na Nortesys e Formando em ADS - IFTO Araguaína"
            description="Aprenda os conceitos básicos do Arduíno, uma plataforma de prototipagem eletrônica de código aberto. Neste minicurso, você será introduzido ao ambiente de desenvolvimento, componentes eletrônicos e programação básica para criar seus próprios projetos interativos."
            address="Laboratório Maker"
            vacancy="Vagas disponíveis: 10"
            womanSpeaker={false}
          />

            <hr style={{ 
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "20px 0" 
            }} />

        <TimelineContentWithImage
            course={true}
            title="🤖 Minicurso: Desenvolvimento de um Bot no Discord"
            image=""
            name="Jhon Henrique e Flávio Manoel"
            about_name="Devs e Formandos em ADS - IFTO Araguaína"
            description="Mergulhe no mundo do desenvolvimento de bots para o Discord! Neste minicurso, você aprenderá a criar um bot funcional, integrando com 
            inteligência artificial e api do Discord,desde a configuração inicial até a implementação de comandos personalizados.
             Descubra como interagir com a API do Discord e adicionar funcionalidades divertidas e úteis ao seu servidor."
            vacancy="Vagas disponíveis: 25"
            address="Laboratório 2"
            womanSpeaker={false}
            twoSpeakers={true}
          />

           <hr style={{ 
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "20px 0" 
            }} />


          <TimelineContentWithImage
            course={true}
            title="🖥️ Minicurso: Introdução à Experiência de Usuário (UX)"
            image=""
            name="Aghata Magno"
            about_name="Dev Front-End e Formanda em ADS - IFTO Araguaína"
            description="Mergulhe no mundo da Experiência do Usuário (UX)! Neste minicurso, você aprenderá os princípios fundamentais de design centrado no usuário, incluindo pesquisa, prototipagem e testes de usabilidade. Prepare-se para criar experiências digitais que realmente atendam às necessidades dos usuários."
            address="Laboratório 1"
            vacancy="Vagas disponíveis: 20"
            womanSpeaker
            twoSpeakers={false}
          />


           <hr style={{ 
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "20px 0" 
            }} />


            <TimelineContentWithImage
            course={true}
            title="🛜 Minicurso: Prática de Redes"
            image=""
            name="Danilo Borges"
            about_name="Técnico em Redes e Formando em ADS - IFTO Araguaína"
            description="Mergulhe no mundo da Prática de Redes! Neste minicurso, você aprenderá os princípios fundamentais de redes de computadores, incluindo topologias, protocolos e segurança. Prepare-se para criar experiências digitais que realmente atendam às necessidades dos usuários."
            address="Sala de Aula"
            vacancy="Vagas disponíveis: 15"
            womanSpeaker={false}
            twoSpeakers={false}
          />

        </TimelineContainer>

        <TimelineContainer hour="17:00 - 18:00" color="secondary">
            <TimelineSimpleContent
            title="👨🏻‍💻 Orientações para o Torneio de Programação"
            content="Limite de 20 vagas."
            address="Laboratório 2"
          />
        </TimelineContainer>

        <TimelineContainer hour="19:00 - 21:00" right color="secondary">
          <TimelineContentWithImage
            course={true}
            title="🖲️ Minicurso: Introdução ao Arduíno"
            image=""
            name="Juan Felipe"
            about_name="Dev na Nortesys e Formando em ADS - IFTO Araguaína"
            description="Aprenda os conceitos básicos do Arduíno, uma plataforma de prototipagem eletrônica de código aberto. Neste minicurso, você será introduzido ao ambiente de desenvolvimento, componentes eletrônicos e programação básica para criar seus próprios projetos interativos."
            address="Laboratório Maker"
            vacancy="Vagas disponíveis: 10"
            womanSpeaker={false}
          />

            <hr style={{ 
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "20px 0" 
            }} />

        <TimelineContentWithImage
            course={true}
            title="🤖 Minicurso: Desenvolvimento de um Bot no Discord"
            image=""
            name="Jhon Henrique e Flávio Manoel"
            about_name="Devs e Formandos em ADS - IFTO Araguaína"
            description="Mergulhe no mundo do desenvolvimento de bots para o Discord! Neste minicurso, você aprenderá a criar um bot funcional, integrando com 
            inteligência artificial e api do Discord,desde a configuração inicial até a implementação de comandos personalizados.
             Descubra como interagir com a API do Discord e adicionar funcionalidades divertidas e úteis ao seu servidor."
            vacancy="Vagas disponíveis: 25"
            address="Laboratório 2"
            womanSpeaker={false}
            twoSpeakers={true}
          />

           <hr style={{ 
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "20px 0" 
            }} />


          <TimelineContentWithImage
            course={true}
            title="🖥️ Minicurso: Introdução à Experiência de Usuário (UX)"
            image=""
            name="Aghata Magno"
            about_name="Dev Front-End e Formanda em ADS - IFTO Araguaína"
            description="Mergulhe no mundo da Experiência do Usuário (UX)! Neste minicurso, você aprenderá os princípios fundamentais de design centrado no usuário, incluindo pesquisa, prototipagem e testes de usabilidade. Prepare-se para criar experiências digitais que realmente atendam às necessidades dos usuários."
            address="Laboratório 1"
            vacancy="Vagas disponíveis: 20"
            womanSpeaker
            twoSpeakers={false}
          />


           <hr style={{ 
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "20px 0" 
            }} />


            <TimelineContentWithImage
            course={true}
            title="🛜 Minicurso: Prática de Redes"
            image=""
            name="Danilo Borges"
            about_name="Técnico em Redes e Formando em ADS - IFTO Araguaína"
            description="Mergulhe no mundo da Prática de Redes! Neste minicurso, você aprenderá os princípios fundamentais de redes de computadores, incluindo topologias, protocolos e segurança. Prepare-se para criar experiências digitais que realmente atendam às necessidades dos usuários."
            address="Sala de Aula"
            vacancy="Vagas disponíveis: 15"
            womanSpeaker={false}
            twoSpeakers={false}
          />
        </TimelineContainer>
      </Fragment>

      {/* // ? DIA 06 / 12 */}
      <Fragment>
        <TimelineDate date="06 de Dezembro de 2025" />

        <TimelineContainer hour="14:00 - 16:00">
            <TimelineSimpleContent  
              title="🧑‍💻 Torneio de Programação"
              content="Limite de 20 vagas."
              address="Laboratório 2"
            />
        </TimelineContainer>
        

        <TimelineContainer hour="17:00-19:00">
          <TimelineSimpleContent
            title="🧑‍🎓 Mesa redonda com egressos dos cursos Técnico em Informática Integrado ao Ensino Médio e Superior de Tecnologia em Análise e Desenvolvimento de Sistemas"
            content="Momento para interação entre os discentes dos cursos, com perguntas e respostas."
          />
        </TimelineContainer>
      </Fragment>
    </StyledTimeline>
  );
}
