import React, { useEffect, useRef, useState } from "react";
import {
  CarouselliButton,
  CarouselliButtonsWrapper,
  CarouselliComponent,
  CarouselliDot,
  CarouselliDots,
  CarouselliInsideComponent,
  StyledCarouselli,
} from "./CarouselliStyles";
import iconArrowLeft from "../../assets/icons/icon-arrow-left.svg";
import iconArrowRight from "../../assets/icons/icon-arrow-right.svg";

const Carouselli = ({
  components,
  width,
  autoSwitchTime,
}: {
  components: Array<any>;
  width: number;
  autoSwitchTime?: number;
}) => {
  const carouselliRef = useRef<HTMLHeadingElement>(null);
  const [actualComponent, setActualComponent] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [allowAuto, setAllowAuto] = useState(true);

  const nextHandle = (wasClicked: boolean) => {
    if (carouselliRef.current?.offsetWidth && (wasClicked || allowAuto)) {
      if (actualComponent < components.length - 1) {
        carouselliRef.current!.scrollLeft =
          (actualComponent + 1) * carouselliRef.current!.offsetWidth;
        setActualComponent(actualComponent + 1);
      } else {
        carouselliRef.current!.scrollLeft = 0;
        setActualComponent(0);
      }
    }
  };

  const prevHandle = () => {
    if (carouselliRef.current?.offsetWidth) {
      if (actualComponent > 0) {
        carouselliRef.current!.scrollLeft =
          (actualComponent - 1) * carouselliRef.current!.offsetWidth;
        setActualComponent(actualComponent - 1);
      } else {
        carouselliRef.current!.scrollLeft =
          (components.length - 1) * carouselliRef.current!.offsetWidth;
        setActualComponent(components.length - 1);
      }
    }
  };

  const skipTo = (index: number) => {
    carouselliRef.current!.scrollLeft =
      index * carouselliRef.current!.offsetWidth;
    setActualComponent(index);
  };

  useEffect(() => {
    setRefresh(!refresh);
  }, []);

  useEffect(() => {
    if (autoSwitchTime && allowAuto) {
      setTimeout(() => {
        nextHandle(false);
      }, autoSwitchTime);
    }
  }, [actualComponent]);

  const getHeight = () => {
    if (carouselliRef.current) {
      return carouselliRef.current.offsetHeight;
    }
    return 0;
  };

  return (
    <StyledCarouselli
      numberOfComponents={components.length}
      width={width || 250}
      ref={carouselliRef}
    >
      {components.length &&
        components.map((component) => {
          return (
            <CarouselliComponent>
              <CarouselliInsideComponent>{component}</CarouselliInsideComponent>
            </CarouselliComponent>
          );
        })}
      <CarouselliButtonsWrapper
        width={width || 250}
        currentHeight={getHeight()}
        refresh={refresh}
      >
        <CarouselliButton
          type="button"
          onClick={() => {
            nextHandle(true);
            setAllowAuto(false);
          }}
          bckg={iconArrowRight}
        />
        <CarouselliButton
          type="button"
          onClick={() => {
            prevHandle();
            setAllowAuto(false);
          }}
          bckg={iconArrowLeft}
        />
      </CarouselliButtonsWrapper>
      <CarouselliDots width={width || 250} currentHeight={getHeight()}>
        {components.map((component, index) => {
          if (index === actualComponent) {
            return <CarouselliDot isActive={true} onClick={() => {}} />;
          } else
            return (
              <CarouselliDot
                isActive={false}
                onClick={() => {
                  skipTo(index);
                  setAllowAuto(false);
                }}
              />
            );
        })}
      </CarouselliDots>
    </StyledCarouselli>
  );
};

export default Carouselli;
