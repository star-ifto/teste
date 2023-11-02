import { TimelineContainer, TimelineDate, TimelineSimpleContent } from "..";
import { TimelineContentWithImage } from "../TimelineContentWithImage";
import { StyledTimeline } from "./styles";
import { Fragment } from "react";

import AndersonSRicardoImage from "../../assets/speakers/anderson-s-ricardo.jpg";
import IzabelaMarianaImage from "../../assets/speakers/izabela-mariana.jpg";
import GeanSharlyImage from "../../assets/speakers/gean-sharly.jpg";
import PedroHenriqueAlcantaraImage from "../../assets/speakers/pedro-henrique.jpg";

export function Timeline() {
  return (
    <StyledTimeline>
      {/* // ? DIA 22 / 11 */}
      <Fragment>
        <TimelineDate date="22 de novembro de 2023" />

        <TimelineContainer hour="18:30">
          <TimelineSimpleContent
            title="Boas vindas"
            content="Comece o evento com uma recepção calorosa e uma visão geral empolgante do que está por vir. Saiba o que o dia reserva para você."
          />
        </TimelineContainer>

        <TimelineContainer hour="19:00" right>
          <TimelineSimpleContent
            title="Abertura"
            content="Iniciamos o evento com uma explosão de energia e talento! Desfrute da animação musical envolvente com os alunos Letícia e André, enquanto preparamos o terreno para uma jornada incrível no mundo da tecnologia e gestão."
          />
        </TimelineContainer>

        <TimelineContainer hour="19:30">
          <TimelineContentWithImage
            title="Empreendedorismo e Resiliência: Lições de um Empreendedor de sucesso"
            image={AndersonSRicardoImage}
            name="Anderson S. Ricardo"
            description="Profissional com formação em Engenharia Agronômica pela UNESP e um mestrado em Ciência Animal Tropical com foco em Integração Lavoura-Pecuária pela Universidade Federal do Tocantins. Atualmente, ele ocupa o cargo de Gerente Técnico Comercial na AgroMinas Produtos Agropecuários em Araguaína - TO, onde trabalha desde abril de 2018, inicialmente como Representante Técnico de Vendas."
          />
        </TimelineContainer>

        <TimelineContainer hour="20:50" right>
          <TimelineSimpleContent
            title="Intervalo"
            content="Teremos um breve intervalo de 10 minutos para relaxar, esticar as pernas e socializar com outros entusiastas da tecnologia e gestão."
          />
        </TimelineContainer>

        <TimelineContainer hour="21:00">
          <TimelineSimpleContent
            title="Mesa Redonda"
            content={`Junte-se a Paulo André, Analista de RH, e Marina Teixeira, Advogada, para uma discussão profunda sobre "Desenvolvimento de Talentos: como identificar, desenvolver e reter talentos dentro da organização".`}
          />
        </TimelineContainer>

        <TimelineContainer hour="21:00" right>
          <TimelineSimpleContent
            title="Workshop: Carreira em Programação: Lições e Desafios"
            content="Aprenda com quem já esteve no seu lugar! Junte-se a Luis Oliveira, um ex-aluno do curso de ADS, e explore as experiências e insights valiosos que ele acumulou ao longo de sua jornada de desenvolvimento. Uma oportunidade única para obter conhecimento prático."
          />
        </TimelineContainer>

        <TimelineContainer hour="21:00">
          <TimelineSimpleContent
            title="Workshop: Técnicas de Gerenciamento de Projetos"
            content="Aprimore suas habilidades de gerenciamento de projetos com Juan Felipe, um desenvolvedor experiente e acadêmico de ADS. Aprenda técnicas valiosas para garantir o sucesso de seus projetos e otimizar a eficiência."
          />
        </TimelineContainer>

        <TimelineContainer hour="22:00" right>
          <TimelineSimpleContent
            title="Sorteio de Brindes"
            content="Participe do sorteio de brindes e tenha a oportunidade de levar para casa algo especial. A sorte está a seu favor!"
          />
        </TimelineContainer>
      </Fragment>

      {/* // ? DIA 23 / 11 */}
      <Fragment>
        <TimelineDate date="23 de novembro de 2023" color="secondary" />

        <TimelineContainer hour="19:00" color="secondary">
          <TimelineContentWithImage
            title="Parcerias Industriais e Ecossistemas de Inovação"
            image={GeanSharlyImage}
            name="Gean Sharly de Sousa Santos"
            description="Formado em sistemas de informação, CEO da empresa Nortesys, referência local em tecnologia. A NORTESYS é genuinamente de Araguaína/TO, há mais de 26 anos desenvolvendo sistemas de gestão empresarial e muitas outras soluções. Sua história de determinação e dedicação aos estudos transformou a sua própria realidade ao fazer o primeiro curso na área de informática na década de 1990."
          />
        </TimelineContainer>

        <TimelineContainer hour="20:00" right color="secondary">
          <TimelineContentWithImage
            title="Gestão e Tecnologia na Saúde"
            image={IzabelaMarianaImage}
            name="Izabela Mariana Santos Da Silva"
            description="Gerente na clínica Doutor Hérnia, parte da FRANQUIA DOUTOR HERNIA™, reconhecida por sua liderança no tratamento de patologias da coluna vertebral no Brasil e na América Latina sem recorrer à cirurgia. A clínica é liderada por profissionais com mais de 15 anos de experiência, Dr. André Pêgas de Oliveira e Dr. Laudelino Risso, que introduziram técnicas exclusivas do cenário internacional, incluindo Harvard Medical School e o Hospital Beth Israel."
            right
            womanSpeaker
          />
        </TimelineContainer>

        <TimelineContainer hour="20:50" color="secondary">
          <TimelineSimpleContent
            title="Intervalo"
            content="Teremos um breve intervalo de 10 minutos. É o momento perfeito para relaxar, fazer novas conexões e se preparar para a próxima parte empolgante do evento."
          />
        </TimelineContainer>

        <TimelineContainer hour="21:00" right color="secondary">
          <TimelineSimpleContent
            title="Workshop: Programação Fullstack"
            content="Junte-se a Hugo Christian, Desenvolvedor na Nortesys, para uma imersão prática na Programação Fullstack. Descubra as habilidades essenciais e ferramentas para se destacar no mundo da tecnologia. Prepare-se para aprender e se inspirar!"
          />
        </TimelineContainer>

        <TimelineContainer hour="21:00" color="secondary">
          <TimelineSimpleContent
            title="Workshop: Técnicas de Oratória"
            content="Aprimore suas habilidades de comunicação! Este workshop irá explorar técnicas essenciais de oratória para ajudá-lo a se expressar com confiança e impacto. Este é o momento de aprimorar suas habilidades de fala."
          />
        </TimelineContainer>

        <TimelineContainer hour="21:00" right color="secondary">
          <TimelineSimpleContent
            title="Oficina: Primeiros Socorros"
            content="Prepare-se para aprender habilidades que podem salvar vidas! Junte-se a Katia Vieira, Bombeira Civil, e adquira conhecimentos práticos sobre primeiros socorros. Esta oficina é uma oportunidade valiosa para saber como agir em situações de emergência."
          />
        </TimelineContainer>

        <TimelineContainer hour="22:00" color="secondary">
          <TimelineSimpleContent
            title="Encerramento"
            content="Considerações finais referentes ao segundo dia do evento repleto de aprendizado e inspiração."
          />
        </TimelineContainer>
      </Fragment>

      {/* // ? DIA 24 / 11 */}
      <Fragment>
        <TimelineDate date="24 de novembro de 2023" />

        <TimelineContainer hour="19:00" right>
          <TimelineContentWithImage
            title="?"
            image={PedroHenriqueAlcantaraImage}
            name="Pedro Henrique Alcântara"
            description="CEO da empresa Momê Açaiteria, uma franquia em rápido crescimento que abrange cinco estados do Brasil, destacando-se no meio-norte do país. A marca se destaca por oferecer produtos altamente personalizáveis com qualidade e diversas opções de acompanhamentos. Além disso, a franquia é caracterizada por um baixo investimento e um excelente retorno financeiro, tornando-a uma oportunidade de investimento altamente atrativa."
            right
          />
        </TimelineContainer>

        <TimelineContainer hour="20:00">
          <TimelineSimpleContent
            title="Mostra"
            content="Explore nosso espaço de exibição! Aqui, você encontrará uma variedade de patrocinadores, empreendedores dos cursos, projetos científicos do ensino médio e muito mais. Não deixe de conferir o que há de mais inovador e inspirador."
          />
        </TimelineContainer>

        <TimelineContainer hour="20:00" right>
          <TimelineSimpleContent
            title="Atrações Musicais"
            content="Prepare-se para uma experiência musical incrível! A banda Reciclarte e o DJ SAMN! vão agitar o evento com seus ritmos cativantes. Não perca essas atrações musicais emocionantes!"
          />
        </TimelineContainer>

        <TimelineContainer hour="21:30">
          <TimelineSimpleContent
            title="Sorteio de Brindes"
            content="Sua sorte está prestes a brilhar! Participe do sorteio de brindes e tenha a chance de ganhar prêmios incríveis. Quem sabe você não é o próximo sortudo?"
          />
        </TimelineContainer>

        <TimelineContainer hour="22:00" right>
          <TimelineSimpleContent
            title="Encerramento"
            content="É hora de nos despedirmos. Agradecemos a todos por fazerem deste evento um sucesso. Esperamos que tenham aproveitado as experiências e aprendizado. Até a próxima!"
          />
        </TimelineContainer>
      </Fragment>
    </StyledTimeline>
  );
}
