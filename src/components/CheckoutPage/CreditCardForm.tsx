import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreditCardContext } from "../../contexts/CreditCardContext";
import { cardPlaceholder, getMonths, getYears } from "../../utils";
import { Button, Form, Input, Label, Select, SpanError } from "./styles";

export default function CreditCardForm() {
  const { cardData } = useContext(CreditCardContext);

  const arrMonths = getMonths();
  const arrYears = getYears();

  const createSchema = z.object({
    cardHolder: z.string().min(1, "Card holder is required").max(25),
    cardNumber: z
      .string()
      .min(19, "Card number is required")
      .max(19)
      .refine((value) => /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(value), {
        message:
          "Invalid card number format. Please use the format 0000-0000-0000-0000",
      })
      .refine((value) => /^\d+$/.test(value), {
        message: "Card number must contain only numbers.",
      }),
    expiresMonth: z
      .string()
      .refine(
        (value) =>
          /^\d{2}$/.test(value) &&
          parseInt(value, 10) >= 1 &&
          parseInt(value, 10) <= 12,
        {
          message:
            "Invalid expiration month. Please use a valid month between 01 and 12.",
        },
      ),
    expiresYear: z
      .string()
      .refine(
        (value) =>
          /^\d{4}$/.test(value) &&
          parseInt(value, 10) >= new Date().getFullYear(),
        {
          message:
            "Invalid expiration year. Please use a valid year that is equal or after the current year.",
        },
      ),
    cvv: z.number().min(3, "CVV is required").max(3),
  });

  type createUserFormData = z.infer<typeof createSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createSchema),
  });

  const onSubmit = (data: any) => {
    localStorage.setItem("finish", JSON.stringify(data));
    console.log(data);
  };

  const [cardNumber, setCardNumber] = useState("");

  const handleChangecardNumber = (e: { target: { value: string } }) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove todos os caracteres que não são dígitos
    value = value.replace(/(\d{4})(?=\d)/g, "$1-"); // Adiciona um hífen após cada grupo de quatro dígitos
    cardData.setNumbers(e.target.value);
    setCardNumber(value);
  };

  return (
    <Form>
      <h2>Digite os dados do seu cartão</h2>
      <Label htmlFor="cardNumber">
        <p>Número do cartão</p>
        <Input
          value={cardNumber}
          maxLength={19}
          {...register("cardNumber")}
          onChange={handleChangecardNumber}
          onFocus={() => cardData.setSide("front")}
          placeholder={cardPlaceholder.cardNumber}
        />
        {errors.cardNumber && (
          <SpanError>{errors.cardNumber.message}</SpanError>
        )}
      </Label>
      <Label htmlFor="cardHolder">
        <p>Nome impresso no cartão</p>
        <Input
          {...register("cardHolder")}
          onChange={(ev) =>
            cardData.setCardHolder(ev.target.value.toUpperCase())
          }
          placeholder={cardPlaceholder.cardHolder}
          onFocus={() => cardData.setSide("front")}
          maxLength={25}
        />
        {errors.cardHolder && (
          <SpanError>{errors.cardHolder.message}</SpanError>
        )}
      </Label>
      <Label htmlFor="month" className="grid grid-cols-2 gap-2">
        <p className="col-span-2">Validade</p>
        <Select
          id="month"
          onChange={(ev) => cardData.setExpiresMonth(ev.target.value)}
          onFocus={() => cardData.setSide("front")}
        >
          <option value="0">mm</option>
          {arrMonths.map((month) => (
            <option value={month} key={month}>
              {String(month).padStart(2, "0")}
            </option>
          ))}
        </Select>
        <Select onChange={(ev) => cardData.setExpiresYear(ev.target.value)}>
          <option value="0">yy</option>
          {arrYears.map((year) => (
            <option value={year} key={year}>
              {String(year).padStart(2, "0")}
            </option>
          ))}
        </Select>
      </Label>
      <Label htmlFor="cvv">
        <p>Código de verificação</p>
        <Input
          onFocus={() => cardData.setSide("back")}
          // onBlur={() => cardData.setSide("front")}
          {...register("cvv")}
          placeholder={cardPlaceholder.cvv}
          onChange={(ev) => cardData.setCVV(ev.target.value)}
          maxLength={3}
        />
        {errors.cvv && <SpanError>{errors.cvv.message}</SpanError>}
      </Label>

      <Button onClick={onSubmit} {...handleSubmit} type="submit">
        Submit
      </Button>
    </Form>
  );
}
