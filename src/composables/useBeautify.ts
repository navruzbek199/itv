export const useBeautify = () => {
  const beautifyCard = (card: number | string) =>
    String(card).replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");

  const beautifyPhone = (phone: number | string) =>
    String(phone).replace(
      /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
      "($2) $3-$4-$5"
    );

  const getPayType = (type: number): string => {
    const payTypes: Record<number, string> = {
      1: "CASH",
    };
    return payTypes[type] || "CASH";
  };

  return {
    beautifyCard,
    beautifyPhone,
    getPayType,
  };
};
