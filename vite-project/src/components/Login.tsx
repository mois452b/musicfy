import { useState } from "react";

const Login = ({ setToken }: { setToken: (token: string) => void }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí deberías llamar a tu backend o auth
    fetch("https://didactic-trout-5ggxpq5w7w69cq5r-5000.app.github.dev/api/auths/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al iniciar sesión");
        }
        return response.json();
      }
      )
      .then((data) => {
          setToken(data.token);
      }
      )
      .catch((error) => {
        console.error("Error en el inicio de sesión:", error);
      }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl text-center font-bold text-green-500 mb-8 bg-clip-text animate-pulse bg-gradient-to-r from-green-400 to-green-600">
          Musicfy
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-1">Usuario</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200 shadow-md"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="text-center text-gray-400 mt-6 text-sm">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="text-green-500 hover:underline">
            Regístrate
          </a>
        </div>

        <div className="text-center text-gray-500 mt-2 text-xs">
          o{" "}
          <a href="#" className="text-gray-300 hover:underline">
            continuar como invitado
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
