const WhatsAppSimulation = () => (
  <div className="relative w-full h-[500px]">
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="relative w-[280px] h-[560px] bg-black rounded-[40px] p-3 shadow-2xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl"></div>
        <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col">
          <div className="bg-green-500 text-white p-4">
            <h3 className="font-bold">LexiFlow</h3>
          </div>
          <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
            <div className="bg-white rounded-lg p-3 mb-4 shadow-sm max-w-[80%]">
              <p className="text-sm">
                Olá! Hora da sua prática diária 🚀
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 mb-4 shadow-sm max-w-[80%]">
              <p className="text-sm">
                Como se diz "reunião" em inglês?
              </p>
            </div>
            <div className="bg-green-100 rounded-lg p-3 mb-4 shadow-sm max-w-[80%] ml-auto">
              <p className="text-sm">Meeting</p>
            </div>
            <div className="bg-white rounded-lg p-3 mb-4 shadow-sm max-w-[80%]">
              <p className="text-sm">✅ Correto! +10 pontos</p>
              <p className="text-xs text-gray-500 mt-1">
                Você está em uma sequência de 3 dias!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WhatsAppSimulation;