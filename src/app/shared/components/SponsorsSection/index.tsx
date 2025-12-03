import { Title } from "..";
import { SponsorCard } from "../SponsorCard";
import { StyledContainer, StyledSponsorsContainer } from "./styles";

import nortesys from "../../assets/sponsors/logo nortesys.png";
import OBoticario from "../../assets/sponsors/boticario.png"


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
    title: "Nortesys",
    image: nortesys,
    description:
      "Imagine uma empresa que não vende apenas software, mas sim um futuro melhor para o Brasil. Essa é a Nortesys! Não estamos aqui apenas para lucrar, mas para fazer a diferença.",
    instagram: "nortesystec",
  },

  {
    title: "O Boticário Araguaína",
    image:OBoticario,
    description:
      "O Boticário é uma das maiores redes de franquias de cosméticos do Brasil, oferecendo produtos de beleza e cuidados pessoais de alta qualidade.",
    instagram: "boticario_araguaina",
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
