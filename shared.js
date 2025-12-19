(() => {
    const App = (() => {

        // ================= CACHE =================
        console.log("shared.js cargado");

        const CACHE_KEY = 'pokemon_cache';
        const CACHE_EXPIRY_HOURS = 24;

        function inicializarCache() {
            if (!localStorage.getItem(CACHE_KEY)) {
                localStorage.setItem(CACHE_KEY, JSON.stringify({}));
            }
        }

        function obtenerCache() {
            const cacheData = localStorage.getItem(CACHE_KEY);
            console.log("🔍 obtenerCache() llamado. Datos RAW:", cacheData);

            if (!cacheData) {
                console.log("📭 Cache vacío o no existe");
                return {};
            }

            try {
                const parsed = JSON.parse(cacheData);
                console.log("✅ Cache parseado. Claves:", Object.keys(parsed));
                return parsed;
            } catch (e) {
                console.error("❌ Error parseando cache:", e);
                return {};
            }
        }

        function guardarEnCache(pokemonId, pokemonData) {
            const cache = obtenerCache();
            cache[pokemonId] = {
                data: pokemonData,
                timestamp: Date.now(),
                expiry: CACHE_EXPIRY_HOURS * 60 * 60 * 1000
            };
            localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
        }

        function buscarEnCache(pokemonId) {
            const cache = obtenerCache();
            const cachedItem = cache[pokemonId];

            if (cachedItem) {
                const now = Date.now();
                const isExpired = (now - cachedItem.timestamp) > cachedItem.expiry;

                if (!isExpired) {
                    console.log(`Pokémon ${pokemonId} encontrado en cache`);
                    return cachedItem.data;
                } else {
                    console.log(`Cache para ${pokemonId} ha expirado`);
                    delete cache[pokemonId];
                    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
                }
            }
            return null;
        }

        function limpiarCacheExpirado() {
            const cache = obtenerCache();
            const now = Date.now();
            let cambios = false;

            for (const key in cache) {
                if ((now - cache[key].timestamp) > cache[key].expiry) {
                    delete cache[key];
                    cambios = true;
                }
            }

            if (cambios) {
                localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
            }
        }

        function debugLocalStorage() {
            console.log("=== DEBUG LOCALSTORAGE ===");
            console.log("1. CACHE_KEY existe?", localStorage.getItem(CACHE_KEY) ? "SÍ" : "NO");
            console.log(
                "2. Contenido de pokemon_cache:",
                JSON.parse(localStorage.getItem(CACHE_KEY) || 'null')
            );
            console.log("3. Todas las claves en localStorage:", Object.keys(localStorage));
            console.log("=== FIN DEBUG ===");
        }

        // ================= EVOLUCIONES =================

        async function obtenerCadenaEvolutiva(pokemon) {
            console.log("🔗 Obteniendo cadena evolutiva de:", pokemon.name);

            const responseSpecies = await fetch(pokemon.species.url);
            if (!responseSpecies.ok) {
                throw new Error("Error al obtener species");
            }
            const speciesData = await responseSpecies.json();

            const responseEvo = await fetch(speciesData.evolution_chain.url);
            if (!responseEvo.ok) {
                throw new Error("Error al obtener evolution chain");
            }
            const evoData = await responseEvo.json();

            return extraerEvolucionesPorNivel(evoData.chain);
        }

        function extraerEvolucionesPorNivel(chain) {
            const niveles = [];

            function recorrer(nodo, nivel = 0) {
                if (!niveles[nivel]) {
                    niveles[nivel] = [];
                }

                niveles[nivel].push(nodo.species.name);

                nodo.evolves_to.forEach(evo =>
                    recorrer(evo, nivel + 1)
                );
            }

            recorrer(chain);
            return niveles;
        }

        // 🔓 EXPONER funciones necesarias GLOBALMENTE
        return {
            init() {
                inicializarCache();
            },

            inicializarCache,
            obtenerCache,
            guardarEnCache,
            buscarEnCache,
            limpiarCacheExpirado,
            debugLocalStorage,
            obtenerCadenaEvolutiva,
            extraerEvolucionesPorNivel
        };

    })();

    // Hacerlas accesibles desde index.js
    window.inicializarCache = App.inicializarCache;
    window.obtenerCache = App.obtenerCache;
    window.guardarEnCache = App.guardarEnCache;
    window.buscarEnCache = App.buscarEnCache;
    window.limpiarCacheExpirado = App.limpiarCacheExpirado;
    window.debugLocalStorage = App.debugLocalStorage;
    window.obtenerCadenaEvolutiva = App.obtenerCadenaEvolutiva;
    window.extraerEvolucionesPorNivel = App.extraerEvolucionesPorNivel;

    App.init();
})();
