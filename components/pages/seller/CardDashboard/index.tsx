const CardDashboard = ({ children, type, customClass }: any) => {
  return (
    <div
      className={`border border-[#D5D7D9] ${
        type && 'border-[#EE3124] bg-[#FFF9F9]'
      } ${customClass ?? ''} rounded-lg p-4`}>
      {children}
    </div>
  );
};

export default CardDashboard;
