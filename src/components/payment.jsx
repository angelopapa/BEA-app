/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import "./csspay/style.css"
import { Link } from 'react-router-dom';

const Payment = () => {

    
    //data pagamento
    const [currentDate, setCurrentDate] = useState(new Date());

    const getCurrentDate = () => {
        const now = new Date();
        setCurrentDate(now);
    };


    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1; // i mesi partono da 0, quindi aggiungiamo 1
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };


    // data per la carta di credito
    const [date, setDate] = useState('');

    const handleChange = (e) => {
        let input = e.target.value.replace(/\D/g, ''); // Rimuove tutti i non numerici
        input = input.slice(0, 4); // Limita la lunghezza a 4 caratteri (MMYYYY)

        // Aggiungi "/" dopo ogni due caratteri
        if (input.length > 2) {
            input = input.slice(0, 2) + '/' + input.slice(2);
        }

        // Aggiorna lo stato della data
        setDate(input);
    };

    const [paypalActive, setPaypalActive] = useState(false);
    const [bankTransferActive, setBankTransferActive] = useState(false);
    const [IndirizzoActive, setIndirizzoActive] = useState(true); // Indirizzo attivo per impostazione predefinita
    const [creditCardActive, setCreditCardActive] = useState(false);

    const handleIndirizzoClick = () => {
        setIndirizzoActive(true);
        setCreditCardActive(false);
        setBankTransferActive(false);
        setPaypalActive(false);
    };

    const handleCreditCardClick = () => {
        setCreditCardActive(true);
        setIndirizzoActive(false);
        setPaypalActive(false);
        setBankTransferActive(false);
      
    };

    const handlePaypalClick = () => {
        setPaypalActive(true);
        setIndirizzoActive(false);
        setCreditCardActive(false);
        setBankTransferActive(false);
       
    };

    const handleBankTransferClick = () => {
        setBankTransferActive(true);
        setIndirizzoActive(false);
        setCreditCardActive(false);
        setPaypalActive(false);
    };




    return (
        <div class="containers bg-light d-md-flex align-items-center">
            <div class="cards box1 shadow-sm p-md-5 p-md-5 p-4">
                <div class="fw-bolder mb-4"><span class="fas fa-dollar-sign"></span><span class="ps-1">599,00</span></div>
                <div class="d-flex flex-column">
                    <div class="d-flex align-items-center justify-content-between text">
                        <span class="">Shipping</span>
                        <span class="fas fa-dollar-sign"><span class="ps-1">29.99</span></span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between text mb-4">
                        <span>Total</span>
                        <span class="fas fa-dollar-sign"><span class="ps-1">600.99</span></span>
                    </div>
                    <div class="border-bottom mb-4"></div>
                    <div class="d-flex flex-column mb-4">
                        <span class="far fa-file-alt text"><span class="ps-2">Invoice ID:</span></span>
                        <span class="ps-3">SN8478042099</span>
                    </div>
                    <div class="d-flex flex-column mb-5">
                        <span class="far fa-calendar-alt text"><span class="ps-2">Payment Date:</span></span>
                        <span class="ps-3">{formatDate(currentDate)}</span>

                    </div>


                </div>
            </div>
            <div class="cards box2 shadow-sm">
                <div class="d-flex align-items-center justify-content-between p-md-5 p-4">
                    <span class="h5 fw-bold m-0">Payment methods</span>
                    <div class="btn btn-primary bar"><span class="fas fa-bars"></span></div>
                </div>
                <ul className="nav nav-tabs mb-3 px-md-4 px-2">
            <li className="nav-item me-1">
                <a className={`nav-link px-2 ${IndirizzoActive ? 'active' : ''}`} data-bs-toggle="indirizzo" aria-controls="indirizzo" aria-current="page" href="#indirizzo" onClick={handleIndirizzoClick}>Indirizzo</a>
            </li>
            <li className="nav-item me-2">
                <a className={`nav-link px-2 ${creditCardActive ? 'active' : ''}`} href="#cc" onClick={handleCreditCardClick}>Credit Card</a>
            </li>
            <li className="nav-item me-1">
                <a className={`nav-link px-2 ${paypalActive ? 'active' : ''}`} href="#pp" onClick={handlePaypalClick}>Paypal</a>
            </li>
            <li className="nav-item">
                <a className={`nav-link px-2 ${bankTransferActive ? 'active' : ''}`} href="#bt" onClick={handleBankTransferClick}>Bank Transfer</a>
            </li>
        </ul>


                {!paypalActive && !bankTransferActive && !creditCardActive &&(
                <div id="indirizzo">
                        <div className="card card-body mb-2">
                        <div class="form-floating">
                                <input type="text" class="form-control" id="floatpaese" placeholder="Paese"/>
                                <label for="floatpaese">Paese/Regione</label>
                            </div>
                            <div class="form-floating ">
                                <input type="text" class="form-control" id="floatingNeC" placeholder="Nome e Cognome" />
                                <label for="floatingNeC">Nome e Cognome</label>
                            </div>
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatVia" placeholder="Via e Numero Civico" />
                                <label for="floatVia">Via e Numero Civico</label>
                            </div>
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatcitta" placeholder="Citta" />
                                <label for="floatcitta">Città</label>
                            </div>
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatpro" placeholder="Provinca" maxlength="2"/>
                                <label for="floatpro">Provincia</label>
                            </div>
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatcap" placeholder="CAP" maxlength="5"/>
                                <label for="floatcap">CAP</label>
                            </div>
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floattel" placeholder="Telefono" maxlength="10"/>
                                <label for="floattel">Telefono</label>
                            </div>
                           
                        </div>

                    </div>
                    )}

                {/* Mostra il div di Paypal solo se paypalVisible è true */}
                {paypalActive && (
                    <div id="pp">
                        <div className="card card-body">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="your paypal@email" />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                        <div class="col-12 mt-4">
                            <div class="btn bottone w-100 text-center"><Link to="/" className="custom-link">Pay $599.00</Link></div>
                        </div>
                        </div>
                    </div>
                )}


                {bankTransferActive && (
                    <div id="bt">
                        <div className="card card-body">
                            <div class="form-floating ">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Intestatario" />
                                <label for="floatingInput">Intestatario</label>
                            </div>
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatNconto" placeholder="Numero Conto" />
                                <label for="floatNconto">Numero Conto</label>
                            </div>
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatBanca" placeholder="Banca" />
                                <label for="floatBanca">Banca</label>
                            </div>
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatIban" placeholder="IBAN" />
                                <label for="floatIban">IBAN</label>
                            </div>
                            <div class="col-12 mt-4">
                                <div class="btn bottone w-100 text-center"><Link to="/" className="custom-link">Pay $599.00</Link></div>
                            </div>
                        </div>

                    </div>
                )}

                {creditCardActive && (
                    <form id="cc">
                        <div class="row">
                            <div class="col-12">
                                <div class="d-flex flex-column px-md-5 px-4 mb-4">
                                    <span>Credit Card</span>
                                    <div class="inputWithIcon">
                                        <input class="form-control" type="text" placeholder="**** **** **** ****" maxlength="16" />
                                        <span class="">
                                            <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" alt="mastercard" id='image' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                                    <span>Expiration<span> Date</span></span>
                                    <div className="inputWithIcon">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="MM/YY"
                                            value={date}
                                            onChange={handleChange}
                                        />
                                        <span className="fas fa-calendar-alt"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                                    <span>Code CVV</span>
                                    <div class="inputWithIcon">
                                        <input type="password" class="form-control" placeholder="123" maxlength="3" />
                                        <span class="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="d-flex flex-column px-md-5 px-4 mb-4">
                                    <span>Name</span>
                                    <div class="inputWithIcon">
                                        <input class="form-control text-uppercase" type="text" placeholder="your name" />
                                        <span class="far fa-user"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 px-md-5 px-4 mt-3">
                                <div class="btn bottone w-100 text-center"><Link to="/" className="custom-link">Pay $599.00</Link></div>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>

    )
}

export default Payment