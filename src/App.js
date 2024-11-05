import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

// Navbar Component
function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">🏠 Inicio</Link></li>
        <li><Link to="/register">📝 Registro</Link></li>
        <li><Link to="/login">🔑 Inicio de sesión</Link></li>
        <li><Link to="/search-design">🔍 Buscar Diseño</Link></li>
        <li><Link to="/book-appointment">📅 Reservar Cita</Link></li>
        <li><Link to="/profile">👤 Perfil</Link></li>
        <li><Link to="/nail-care-tips">💡 Tips de Cuidado</Link></li>
      </ul>
    </nav>
  );
}

// Home Component
function Home() {
  return (
    <div className="home-section">
      <h1>💅 Bienvenida al Salón de Uñas 💅</h1>
      <p>Explora diseños únicos y modernos para tus uñas y reserva tu cita con nuestras expertas profesionales.</p>
      <div className="tips-section">
        <h3>Consejo Rápido:</h3>
        <p>Hidrata tus uñas y cutículas a diario para mantenerlas fuertes y saludables. Usa aceites esenciales como el de jojoba.</p>
      </div>
    </div>
  );
}

// Register Component
function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario registrado:", form);
  };

  return (
    <div className="register-section">
      <h2>📝 Registro Rápido</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo Electrónico" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit">Registrar ✨</button>
      </form>
      <p className="note">* Es rápido y sencillo, para que disfrutes nuestros servicios sin complicaciones.</p>
    </div>
  );
}

// Login Component
function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inicio de sesión:", form);
  };

  return (
    <div className="login-section">
      <h2>🔑 Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Correo Electrónico" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit">Iniciar Sesión 🚪</button>
      </form>
    </div>
  );
}

// SearchDesign Component
function SearchDesign() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Búsqueda de diseño:", search);
  };

  return (
    <div className="search-design-section">
      <h2>🔍 Búsqueda de Diseño</h2>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Buscar diseño" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Buscar 🎨</button>
      </form>
      <div className="design-gallery">
        <h3>Explora algunos diseños:</h3>
        <div className="design-images">
          {/* Aquí irían imágenes de ejemplo */}
          <img src="/images/design1.jpg" alt="Diseño 1" />
          <img src="/images/design2.jpg" alt="Diseño 2" />
          <img src="/images/design3.jpg" alt="Diseño 3" />
        </div>
      </div>
    </div>
  );
}

// BookAppointment Component
function BookAppointment() {
  const [appointment, setAppointment] = useState({ date: "", time: "" });

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cita reservada:", appointment);
  };

  return (
    <div className="appointment-section">
      <h2>📅 Reservar Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Fecha:</label>
        <input type="date" name="date" onChange={handleChange} required />
        <label>Hora:</label>
        <input type="time" name="time" onChange={handleChange} required />
        <button type="submit">Reservar 💅</button>
      </form>
      <div className="payment-info">
        <h3>Opciones de Pago:</h3>
        <p>Realiza tu pago de forma presencial y confiable con nuestras profesionales.</p>
      </div>
    </div>
  );
}

// Profile Component
function Profile() {
  return (
    <div className="profile-section">
      <h2>👤 Perfil de la Profesional</h2>
      <p>Conoce más sobre nuestras artistas, su experiencia, y mira fotos de trabajos anteriores.</p>
    </div>
  );
}

// NailCareTips Component
function NailCareTips() {
  return (
    <div className="nail-care-tips-section">
      <h2>💡 Tips para el Cuidado de Uñas</h2>
      <ul>
        <li>Hidrata tus cutículas con aceites naturales para mantenerlas saludables.</li>
        <li>Evita el uso excesivo de químicos agresivos en tus uñas.</li>
        <li>Utiliza una base protectora antes de aplicar esmaltes oscuros.</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search-design" element={<SearchDesign />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/nail-care-tips" element={<NailCareTips />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
