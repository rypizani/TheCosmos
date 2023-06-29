import { colors } from "../../constants";

import {
  StyledSection,
  StyledHeading,
  StyledPlanet,
  StyledCelestialObject,
  StyledPlanetParagraph,
  ServicesIcon
} from "./StyledPromo";

import img1 from "../../images/svg-1.svg"
import img2 from "../../images/svg-2.svg"
import img3 from "../../images/svg-3.svg"


const PromoSection = () => (
  <StyledSection>
    <StyledHeading>Knowledge right at your fingertips</StyledHeading>
    <StyledPlanet>
      <ServicesIcon src={img3}/>
      <StyledPlanetParagraph>Não perca mais tempo analisando e recalculando os seus recursos humanos.</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
    <ServicesIcon src={img2}/>
      <StyledPlanetParagraph>Tenha controle de todos os seus projetos simultaneamente. </StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
    <ServicesIcon src={img1}/>
      <StyledPlanetParagraph>Aproveite ao máximo todos os seus recursos, trazendo sucesso para sua empresa.</StyledPlanetParagraph>
    </StyledPlanet>
  </StyledSection>
)

export default PromoSection;