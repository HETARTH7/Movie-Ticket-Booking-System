import React, { useEffect, useState } from "react";
import "./seat_chart.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const user = localStorage["username"];
const SeatChar = () => {
  const { movie_id, date, show } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/movies")
      .then((res) => {
        setMovies(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/booking", {
        params: { movie_id, date, show },
      })
      .then((res) => {
        setBookedSeats(res.data.bookedSeats);
      })
      .catch((err) => console.log(err));
  }, [date, movie_id, show]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const selectSeat = (seat_no) => {
    if (bookedSeats.includes(seat_no)) {
      console.log("Seat already booked");
      return;
    }
    if (selectedSeats.includes(seat_no)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seat_no));
    } else {
      setSelectedSeats([...selectedSeats, seat_no]);
    }
  };

  const seats = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
    ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    ["31", "32", "33", "34", "35", "36", "37", "38", "39", "40"],
    ["41", "42", "43", "44", "45", "46", "47", "48", "49", "50"],
  ];

  const calculateTotalCost = () => {
    let totalCost = 0;
    selectedSeats.forEach((seat_no) => {
      const seatNumber = parseInt(seat_no);
      if (seatNumber >= 1 && seatNumber <= 10) {
        totalCost += 250;
      } else if (seatNumber >= 11 && seatNumber <= 30) {
        totalCost += 200;
      } else if (seatNumber >= 31 && seatNumber <= 50) {
        totalCost += 150;
      }
    });
    return totalCost;
  };

  const totalCost = calculateTotalCost();

  const BookTicket = () => {
    axios
      .post("http://localhost:5000/booking", {
        movie_id,
        date,
        show,
        user,
        selectedSeats,
      })
      .then((res) => {
        alert("Seats booked successfully");
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1>Pick your seats</h1>
      <h3>
        {movies[movie_id - 1].name} • {date} • {show}
      </h3>
      <div className="d-flex justify-content-between">
        <div className="seats-container">
          <table className="grid">
            <tbody>
              {seats.map((numList, i) => (
                <tr key={i}>
                  {numList.map((seat_no) => (
                    <td
                      onClick={() => selectSeat(seat_no)}
                      className={
                        bookedSeats.includes(seat_no)
                          ? "unavailable"
                          : selectedSeats.includes(seat_no)
                          ? "reserved"
                          : ""
                      }
                      key={seat_no}
                    >
                      {seat_no}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {totalCost > 0 ? (
          <div className="amount-container">
            <p>Ticket Price: {totalCost}</p>
            <button className="btn btn-success" onClick={BookTicket}>
              Pay
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SeatChar;
