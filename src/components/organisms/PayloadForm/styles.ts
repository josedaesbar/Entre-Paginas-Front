import { Colors } from "@styles/colors";
import { FontsSizes } from "@styles/fonts";
import styled from "styled-components";

export const Container = styled.div`
  width: 600px;

  display: grid;
  grid-auto-rows: min-content;
  row-gap: 30px;
`;

export const TypeDeliveryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TypeDelivery = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 75px max-content;
  grid-template-rows: 50px;

  column-gap: 7.5px;
`;

export const Logo = styled.div`
  width: 100%;
  height: 100%;

  border: 1px solid ${Colors.GRAY_C};
  background-color: ${Colors.WHITE_B};
  box-sizing: border-box;
`;

export const DeliveryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 150px;
  grid-template-rows: 25px;
  column-gap: 15px;
  align-items: center;
`;

export const Select = styled.select`
  height: 100%;
  width: 100%;
`;

export const DirectionsContainer = styled.div`
  width: 100%;
  display: grid;
  row-gap: 15px;
`;

export const DirectionItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: min-content 30px;
  row-gap: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;

  &:active {
    outline: 0;
  }
  &:focus {
    outline: 0;
  }
`;

export const PickerContainer = styled.div`
  display: grid;
  justify-content: center;

  & {
    .Selectable
      .DayPicker-Day--selected:not(.DayPicker-Day--from):not(.DayPicker-Day--to):not(.DayPicker-Day--outside) {
      color: ${Colors.WHITE};
      font-family: var(--font);
      background-color: ${Colors.RED};
      font-size: ${FontsSizes.SMALL_A};
    }
    .Selectable .DayPicker-Day {
      border-radius: 100%;
      font-family: var(--font);
      font-size: ${FontsSizes.SMALL_A};
    }

    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
      background-color: ${Colors.RED_B};
      font-family: var(--font);
      font-size: ${FontsSizes.SMALL_A};
    }

    .DayPicker-Caption {
      font-family: var(--font);
    }
  }
`;

export const ContentPicker = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DeliveryHour = styled.div`
  margin-top: 15px;
`;

export const SelectStore = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 25px;
  column-gap: 15px;
  align-items: center;
`;

export const PayMethodContainer = styled.div`
  width: 100%;
  display: grid;
  row-gap: 10px;
`;

export const PayMethodItem = styled.div`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 35px 1fr max-content;
  column-gap: 15px;
  border: 2px solid ${Colors.GRAY_C};
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.WHITE_B};
  }
`;

export const ButtonCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  border: 2px solid ${Colors.GRAY_C};
`;

export const ImagesCardsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 5px;
`;

export const ImageCards = styled.div`
  width: 60px;
  height: 35px;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;

  & img {
    border-radius: 5px;
    object-fit: cover;
  }
`;
