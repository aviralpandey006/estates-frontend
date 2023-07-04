import React from "react";
import {
  FileTextFilled,
  CodepenCircleFilled,
  SafetyCertificateFilled,
  MoneyCollectFilled,
  SketchSquareFilled,
  ContainerFilled,
  HomeFilled,
  FormatPainterFilled,
  CarFilled,
  ToolFilled,
} from "@ant-design/icons";

const Everything = () => {
  return (
    <div className="everything_container">
      <h1>Everything you Need at One Place</h1>

      <div className="everything">
        <div className="everything_card">
          <h3>
            {" "}
            <FileTextFilled className="everything_icon" />
            Rent Agreement
          </h3>
          Rent Agreement Super Quick & Easy Stamped & E-Signed Delivered
          Directly in Mailbox
        </div>
        <div className="everything_card">
          <h3>
            {" "}
            <CodepenCircleFilled className="everything_icon" /> Online Rent
            Online Rent Receipt Generator
          </h3>
          Receipt Generator Instant Download and Print Customizable for
          Monthly/Quarterly Accurate Calculations
        </div>
        <div className="everything_card">
          <h3>
            {" "}
            <SafetyCertificateFilled className="everything_icon" />
            Escrow
          </h3>
          Advance Payment Security Protects Buyer and Seller Mitigates Fraud
          Risk
        </div>
        <div className="everything_card">
          <h3>
            {" "}
            <MoneyCollectFilled className="everything_icon" /> Attractive
            Interest Home Loan
          </h3>
          Rates Greater Loan Eligibility Loan Offers From Banks
        </div>
        <div className="everything_card">
          <h3>
            {" "}
            <SketchSquareFilled className="everything_icon" /> Lowest Prices
            Interiors & Furnishing
          </h3>
          Guaranteed 10-Year Warranty Timely Delivery Assurance
        </div>
        <div className="everything_card">
          <h3>
            {" "}
            <ContainerFilled className="everything_icon" /> End to end legal
            Legal & Registration
          </h3>
          assistance in property related matters.
        </div>
        <div className="everything_card">
          <h3>
            {" "}
            <HomeFilled className="everything_icon" /> Rent premium furniture
            and Furniture & Appliances on Rent
          </h3>
          appliances of your choice at affordable rates
        </div>
        <div className="everything_card">
          <h3>
            {" "}
            <FormatPainterFilled className="everything_icon" /> Expert painters
            Painting
          </h3>
          bringing your walls to life
        </div>
        <div className="everything_card">
          <h3>
            {" "}
            <CarFilled className="everything_icon" /> Professional and reliable
            Packers & Movers
          </h3>
          home shifting & moving services at reasonable rates.
        </div>
        <div className="everything_card">
          <h3>
            {" "}
            <ToolFilled className="everything_icon" /> Hassle Free Property Zero
            Brokerage Rentals
          </h3>
          Management Services.
        </div>
      </div>
    </div>
  );
};

export default Everything;
