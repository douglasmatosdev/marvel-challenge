import styled from 'styled-components';
import device, { displayFlex, widthHeightMarginPadding } from '../../Utils/mediaQueries/variables';

export const HeroContainer = styled.div`
  ${displayFlex('flex', 'column','', 'center','')};

  @media ${device.mobileSmall} {
    ${widthHeightMarginPadding()}
  }
`; 

export const HeroBox = styled.div`
   
  ${widthHeightMarginPadding('100%','','','1em')}
  ${displayFlex('column', 'center', 'no-wrap')};

  @media ${device.mobileSmall} {
    ${widthHeightMarginPadding('100%','','','1em')};
    ${displayFlex('flex','row','space-between', 'center', 'wrap')};
  }

  @media ${device.tablet} {
    ${displayFlex('flex','row', 'space-evenly','','')}
  }

  @media ${device.laptop} {
    ${displayFlex('flex','', 'space-between','','')}
  }

  @media ${device.laptopMedium} {
    ${widthHeightMarginPadding('1024px','','','')};
  }
`;

export const HeroCard = styled.div`
  overflow: hidden;     
  position: relative;
  
  ${widthHeightMarginPadding('100%','300px','20px','')};

  @media ${device.mobileSmall} {
    ${widthHeightMarginPadding('45%','','5px auto','0')};
  }

  @media ${device.mobileLarge} {
    ${widthHeightMarginPadding('30%','','','')};
  }
  
  @media ${device.tablet} {
    ${widthHeightMarginPadding('22%','','5px','')};
  }

  @media ${device.laptop} {
    ${widthHeightMarginPadding('18%','','5px','')};
  }

  strong {
    position: absolute;
    bottom: 80px;
    line-height: 1;
    left: 10px;
    color: #fff;
    z-index: 1;

    display: block;
    margin-top: auto;

    word-wrap: break-word;

  }

  img {
    transition: all 1s ;
    ${widthHeightMarginPadding('100%','100%','','')};
    object-fit: cover;
  }

  &:hover img{
    transform: scale(1.2);
    transform-origin: 50% 50%;
  }

  &::after {
    content: '';
    display:block;
    background: #202020;
    position: absolute;
    bottom: 0;
    ${widthHeightMarginPadding('100%','40%','','')};
  }
  &::before {
    content: '';
    display:block;
    background: #E62429;
    position: absolute;
    top: 180px;
    
    transition: all .5s ;
    z-index:1;
    ${widthHeightMarginPadding('100%','5px','','')};
  }
  
  &:hover::before {
    ${widthHeightMarginPadding('','145px','','')};
  }

  .canto-chanfrado {
    /* position: relative; */
    width: 50px;
    height: 50px;
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 15px;
      height: 30px;
      background: #efefef;
      z-index: 5;
      bottom: -10px;
      right:-5px;
      transform: rotate(45deg);
    }
  }
`;

export const ButtonsBox = styled.div`
  ${widthHeightMarginPadding('50%','100%','2em 0','')};
  ${displayFlex('flex','', 'center','','')}

  @media ${device.mobileSmall} {
    ${widthHeightMarginPadding('','','','0 .5em')};
  }

`;

export const Button = styled.button`
  ${widthHeightMarginPadding('','','0 1px','.5em')};

  border: none;
  font-size: 1.2em;

  @media ${device.mobileSmall} {
    ${widthHeightMarginPadding('','','0 .2em','')};
    font-size: 1em;
  }

  @media ${device.mobileLarge} {
    ${widthHeightMarginPadding('','','','.5em 1em')};
    font-size: 1em;
  }

  @media ${device.laptop} {
    font-size: 1.2em;
    ${widthHeightMarginPadding('','','','.5em 1em')};
  }
`;