import * as S from "./styles";
import DINNERS_CLUB from "assets/img/utils/DinersClub.png";
import AMERICAN_EXPRESS from "assets/img/utils/AmericanExpress.png";
import MASTER_CARD from "assets/img/utils/MasterCard.png";
import NIUBIZ from "assets/img/utils/niubiz.png";
import OH from "assets/img/utils/Oh.png";
import VISA from "assets/img/utils/Visa.png";

import "react-day-picker/lib/style.css";
import { Span, Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import { MonthsSpanish } from "constants/months";
import { useState } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import { ImageAtom } from "@atoms/Image";
import Icon from "@atoms/Icon";
import { Icons } from "@styles/Icons";

type RangeDaysType = {
  selectedDay: Date | undefined;
};

const PayloadForm = () => {
  const [rangeDays, setRangeDays] = useState<RangeDaysType>({
    selectedDay: undefined,
  });

  const onClickDay = (day: Date) => {
    setRangeDays({ selectedDay: day });
  };

  return (
    <S.Container>
      <S.TypeDeliveryContainer>
        <S.TypeDelivery>
          <S.Logo />
          <S.DeliveryInfo>
            <Text
              fontSize={FontsSizes.SMALL_B}
              fontWeight={FontsWeight.THIN}
              textColor={TColor.BLACK}
            >
              Despacho a domicilio
            </Text>
            <Text
              fontSize={FontsSizes.SMALL_B}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.BLACK}
            >
              No disponible
            </Text>
          </S.DeliveryInfo>
        </S.TypeDelivery>
        <S.TypeDelivery>
          <S.Logo />
          <S.DeliveryInfo>
            <Text
              fontSize={FontsSizes.SMALL_B}
              fontWeight={FontsWeight.THIN}
              textColor={TColor.BLACK}
            >
              Despacho en tienda
            </Text>
            <Text
              fontSize={FontsSizes.SMALL_B}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.BLACK}
            >
              No disponible
            </Text>
          </S.DeliveryInfo>
        </S.TypeDelivery>
      </S.TypeDeliveryContainer>
      <S.TypeDeliveryContainer>
        <S.SelectContainer>
          <Span
            fontSize={FontsSizes.SMALL_B}
            fontWeight={FontsWeight.THIN}
            textColor={TColor.BLACK}
          >
            Departamento
          </Span>
          <S.Select defaultValue={0}>
            <option value="0">Lima</option>
            <option value="0">Ate</option>
            <option value="0">Molina</option>
          </S.Select>
        </S.SelectContainer>
        <S.SelectContainer>
          <Span
            fontSize={FontsSizes.SMALL_B}
            fontWeight={FontsWeight.THIN}
            textColor={TColor.BLACK}
          >
            Distrito
          </Span>
          <S.Select defaultValue={0}>
            <option value="0">Lima</option>
            <option value="0">Ate</option>
            <option value="0">Molina</option>
          </S.Select>
        </S.SelectContainer>
      </S.TypeDeliveryContainer>
      <S.DirectionsContainer>
        <S.DirectionItem>
          <Span
            fontSize={FontsSizes.SMALL_B}
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.BLACK}
          >
            Dirección de envio
          </Span>
          <S.Input type={"text"} placeholder="Escribir direccion" />
        </S.DirectionItem>
        <S.DirectionItem>
          <Span
            fontSize={FontsSizes.SMALL_B}
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.BLACK}
          >
            Referencia de dirección
          </Span>
          <S.Input type={"text"} placeholder="Escribir referencia" />
        </S.DirectionItem>
      </S.DirectionsContainer>
      <S.ContentPicker>
        <S.PickerContainer>
          {!rangeDays.selectedDay ? (
            <Text
              fontSize={FontsSizes.SMALL_A}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.BLACK}
              textCenter
            >
              Seleccione un día
            </Text>
          ) : (
            <Text
              fontSize={FontsSizes.SMALL_A}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.BLACK}
              textCenter
            >
              Selecciono el {rangeDays.selectedDay.toLocaleDateString()}
            </Text>
          )}

          <DayPicker
            months={MonthsSpanish}
            className="Selectable"
            numberOfMonths={1}
            selectedDays={rangeDays.selectedDay}
            modifiers={rangeDays}
            onDayClick={onClickDay}
          />
        </S.PickerContainer>
        <S.DeliveryHour>
          <Text
            fontSize={FontsSizes.SMALL_A}
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.BLACK}
            textCenter
          >
            *El pedido se estrata entregando de 8 am a 5pm
          </Text>
        </S.DeliveryHour>
      </S.ContentPicker>
      <S.DirectionsContainer>
        <S.DirectionItem>
          <Span
            fontSize={FontsSizes.SMALL_B}
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.BLACK}
          >
            ¿Quien recibirá el pedido?
          </Span>
          <S.Input type={"text"} placeholder="Nombre completo" />
        </S.DirectionItem>
      </S.DirectionsContainer>
      <S.SelectStore>
        <Span
          fontSize={FontsSizes.SMALL_B}
          fontWeight={FontsWeight.THIN}
          textColor={TColor.BLACK}
        >
          Seleccione una tienda para recoger su pedido.:
        </Span>
        <S.Select defaultValue={0}>
          <option value="0">Los olivos</option>
          <option value="0">Ate</option>
          <option value="0">Molina</option>
        </S.Select>
      </S.SelectStore>
      <S.TypeDeliveryContainer>
        <S.SelectContainer>
          <Span
            fontSize={FontsSizes.SMALL_B}
            fontWeight={FontsWeight.THIN}
            textColor={TColor.BLACK}
          >
            N. de celular
          </Span>
          <S.Input type={"text"} placeholder="Nombre completo" />
        </S.SelectContainer>
        <S.SelectContainer>
          <Span
            fontSize={FontsSizes.SMALL_B}
            fontWeight={FontsWeight.THIN}
            textColor={TColor.BLACK}
          >
            N. de Telefono
          </Span>
          <S.Input type={"text"} placeholder="Nombre completo" />
        </S.SelectContainer>
      </S.TypeDeliveryContainer>

      <Text
        fontSize={FontsSizes.MEDIUM_B}
        fontWeight={FontsWeight.MEDIUM}
        textColor={TColor.BLACK}
      >
        Métodos de Pago
      </Text>

      <S.TypeDeliveryContainer>
        <S.SelectContainer>
          <Span
            fontSize={FontsSizes.SMALL_B}
            fontWeight={FontsWeight.THIN}
            textColor={TColor.BLACK}
          >
            ¿Qué tipo de comprobante desea?
          </Span>
          <S.Select defaultValue={0}>
            <option value="0">Boleta</option>
            <option value="0">Factura</option>
          </S.Select>
        </S.SelectContainer>
      </S.TypeDeliveryContainer>

      <Span
        fontSize={FontsSizes.SMALL_B}
        fontWeight={FontsWeight.MEDIUM}
        textColor={TColor.BLACK}
      >
        Elige un método de pago
      </Span>
      <S.PayMethodContainer>
        <S.PayMethodItem>
          <S.ButtonCircle />
          <Span
            fontSize={FontsSizes.SMALL_A}
            fontWeight={FontsWeight.THIN}
            textColor={TColor.BLACK}
          >
            Tarjeta Oh! Visa o Mastercard
          </Span>
          <S.ImagesCardsContainer>
            <S.ImageCards>
              <ImageAtom src={OH} objectFit="cover" />
            </S.ImageCards>
          </S.ImagesCardsContainer>
        </S.PayMethodItem>
        <S.PayMethodItem>
          <S.ButtonCircle />
          <Span
            fontSize={FontsSizes.SMALL_A}
            fontWeight={FontsWeight.THIN}
            textColor={TColor.BLACK}
          >
            Otras tarjetas de credito o debito
          </Span>
          <S.ImagesCardsContainer>
            <S.ImageCards>
              <ImageAtom src={VISA} objectFit="cover" />
            </S.ImageCards>
            <S.ImageCards>
              <ImageAtom src={MASTER_CARD} objectFit="cover" />
            </S.ImageCards>
            <S.ImageCards>
              <ImageAtom src={AMERICAN_EXPRESS} objectFit="cover" />
            </S.ImageCards>
            <S.ImageCards>
              <ImageAtom src={DINNERS_CLUB} objectFit="cover" />
            </S.ImageCards>
          </S.ImagesCardsContainer>
        </S.PayMethodItem>
      </S.PayMethodContainer>
      <S.NiuBizContainer>
        <S.NiuBizImageCards>
          <ImageAtom src={NIUBIZ} objectFit="cover" />
        </S.NiuBizImageCards>
        <S.IconWithText>
          <Icon
            Icon={Icons.LOCK}
            textColor={TColor.BLACK}
            size={FontsSizes.MEDIUM_A}
          />
          <Span
            fontSize={FontsSizes.SMALL_A}
            fontWeight={FontsWeight.THIN}
            textColor={TColor.BLACK}
          >
            Tu pago es 100% seguro
          </Span>
        </S.IconWithText>
      </S.NiuBizContainer>
    </S.Container>
  );
};

export default PayloadForm;
