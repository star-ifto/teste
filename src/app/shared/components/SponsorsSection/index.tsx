import { Title } from "..";
import { SponsorCard } from "../SponsorCard";
import { StyledContainer, StyledSponsorsContainer } from "./styles";

import TOCMAQImage from "../../assets/sponsors/tocmaq.png";
import DMCDistribuidoraImage from "../../assets/sponsors/dmc-distribuidora.png";
import SementesAgroboiImage from "../../assets/sponsors/sementes-agroboi.png";
import VotorantimCimentosImage from "../../assets/sponsors/votorantim-cimentos.png";
import NoroesteImage from "../../assets/sponsors/noroeste.png";
import CocoFrioImage from "../../assets/sponsors/coco-frio.png";
import DoutorHerniaImage from "../../assets/sponsors/doutor-hernia.png";
import OticaSOSImage from "../../assets/sponsors/otica-sos.png";
import CasaDeRacoesAgronorteImage from "../../assets/sponsors/casa-de-racoes-agronorte.png";
import SousaRefrigeracaoImage from "../../assets/sponsors/sousa-refrigeracao.png";

interface ISponsorProps {
  image: string;
  title: string;
  description: string;
  instagram: string;
}

interface ISponsorsSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

const SPONSORS: ISponsorProps[] = [
  {
    title: "TOCMAQ",
    image: TOCMAQImage,
    description:
      "Serviços para máquinas pesadas, atendendo às necessidades dos clientes em vários setores. Oferece manutenção, vendas de peças, inspeção e diagnóstico avançado.",
    instagram: "tocmaq",
  },
  {
    title: "Dmc Distribuidora",
    image: DMCDistribuidoraImage,
    description:
      "Comércio atacadista de bebidas, incluindo cerveja, chope e refrigerante. Oferece aluguel de móveis, utensílios, instrumentos musicais e outros equipamentos, assim como o comércio atacadista de água mineral, entre outras atividades.",
    instagram: "revenda.dmc",
  },
  {
    title: "SEMENTES AGROBOI",
    image: SementesAgroboiImage,
    description:
      "A empresa presta serviços de excelência no mercado de sementes de pastagem, oferecendo os melhores produtos com responsabilidade e cuidado.",
    instagram: "agropecuariasertaneja",
  },
  {
    title: "VOTORANTIM CIMENTOS",
    image: VotorantimCimentosImage,
    description:
      "Produção de cimentos, concretos, argamassas e agregados. Também atuam nas áreas de insumos agrícolas, gestão de resíduos e coprocessamento.",
    instagram: "votorantimcimentos",
  },
  {
    title: "NOROESTE",
    image: NoroesteImage,
    description:
      "Destaca-se pela qualidade e pluralidade de seus produtos como: Confecções, calçados, artigos esportivos e para viagens, cama mesa e banho, perfumes, celulares, óculos, relógios e muito mais.",
    instagram: "noroestearaguaina_oficial",
  },
  {
    title: "COCO FRIO",
    image: CocoFrioImage,
    description: "Distribuidora voltada para o comercio de água de coco.",
    instagram: "cocofrio_oficial",
  },
  {
    title: "DOUTOR HERNIA",
    image: DoutorHerniaImage,
    description:
      "Especializada em tratamentos de patologias relacionadas à Coluna Vertebral, Hérnia de Disco e Nervo Ciático.",
    instagram: "doutorherniaaraguaina",
  },
  {
    title: "ÓTICA SOS",
    image: OticaSOSImage,
    description:
      "Proporciona uma experiência de compra diferente e garantir saúde visual a todos, sem distinção.  Oferecer produtos de qualidade com preço justo, prezando sempre pela responsabilidade social e respeito ao meio ambiente.",
    instagram: "sosoticaoficial",
  },
  {
    title: "CASA DAS RAÇÕES AGRONORTE",
    image: CasaDeRacoesAgronorteImage,
    description:
      "Atua na comercialização de produtos agropecuários, e artigos de pesca, além de oferecer serviços técnico visando atender às expectativas dos empresários rurais.",
    instagram: "casadasracoes_agronorte",
  },
  {
    title: "SOUSA REFRIGERAÇÃO",
    image: SousaRefrigeracaoImage,
    description:
      "Desenvolve seu trabalho no segmento de manutenção e reparação em aparelhos de refrigeração e ventilação para uso industrial, comercial e residencial.",
    instagram: "sousa_refrigeracao_e_eletrica",
  },
];

export function SponsorsSection({ ...rest }: ISponsorsSectionProps) {
  return (
    <StyledContainer type="tertiary" {...rest}>
      <Title content="Conheça nossos patrocinadores" />

      <StyledSponsorsContainer>
        {SPONSORS.map((sponsor, k) => (
          <SponsorCard
            key={k}
            image={sponsor.image}
            title={sponsor.title}
            description={sponsor.description}
            instagram={sponsor.instagram}
          />
        ))}
      </StyledSponsorsContainer>
    </StyledContainer>
  );
}
