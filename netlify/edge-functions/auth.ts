export default async (request: Request, context: any) => {
  const url = new URL(request.url);

  console.log("[EDGE] Request para:", url.pathname);

  // Credenciais permitidas (email: password)
  const CREDENTIALS: Record<string, string> = {
    "edgar-m-quintero@alticelabs.com": "meoEnergia2024!",
    // Adiciona mais colaboradores conforme necessário:
    // "colega@alticelabs.com": "senhaSegura123"
  };

  // Excluir caminhos de autenticação e funções (não proteger)
  if (url.pathname === "/login" ||
      url.pathname === "/auth-callback" ||
      url.pathname.startsWith("/.netlify/functions/")) {
    console.log("[EDGE] Path excluído, permitindo acesso:", url.pathname);
    return;
  }

  // Verificar cookie de autenticação
  console.log("[EDGE] Headers completos:", request.headers.get("cookie"));
  const cookies = context.cookies || {};
  const sessionToken = cookies.get("meo_auth_session");

  console.log("[EDGE] Context.cookies:", cookies);
  console.log("[EDGE] Session token encontrado:", sessionToken);

  if (sessionToken === "authenticated") {
    console.log("[EDGE] ✓ Cookie válido! Permitindo acesso");
    return; // Permite acesso
  }

  console.log("[EDGE] Sem cookie válido, redirecionando para login");

  // Verificar header de autorização (para API calls e testes)
  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.slice(7);
    if (token === "meo-demo-token-2024") {
      return; // Permite acesso
    }
  }

  // Se chegou aqui, usuário não está autenticado
  // Redirecionar para página de login
  console.log("[EDGE] Redirecionando para /login");
  return new Response(null, {
    status: 307,
    headers: {
      Location: `/login?redirect=${encodeURIComponent(url.pathname)}`,
    },
  });
};

export const config = {
  path: "/*",
};
