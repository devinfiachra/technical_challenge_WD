import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "@fluentui/react";

const PhoneList = () => {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/phones")
      .then((response) => {
        setPhones(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching phone data:", error);
        setLoading(false);
      });
  }, []);

  const handlePhoneSelect = (phoneId) => {
    setSelectedPhone(phones.find((phone) => phone.id === phoneId));
  };

  return (
    <div>
      {loading ? (
        <Spinner size="huge" label="Huge Spinner" />
      ) : (
        <div>
          <h2>Phone Catalog</h2>
          <ul>
            {phones.map((phone) => (
              <li key={phone.id} onClick={() => handlePhoneSelect(phone.id)}>
                {phone.name}
              </li>
            ))}
          </ul>
          {selectedPhone && (
            <div>
              <h3>Selected Phone Details</h3>
              <p>Name: {selectedPhone.name}</p>
              <p>Manufacturer: {selectedPhone.manufacturer}</p>
              <p>Description: {selectedPhone.description}</p>
              <p>Color: {selectedPhone.color}</p>
              <p>Price: ${selectedPhone.price}</p>
              <p>Screen: {selectedPhone.screen}</p>
              <p>Processor: {selectedPhone.processor}</p>
              <p>RAM: {selectedPhone.ram} GB</p>
              <img
                src={`../../../assets/images/${selectedPhone.imageFileName}`}
                alt={selectedPhone.name}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PhoneList;
