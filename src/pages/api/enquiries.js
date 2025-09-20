export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const body = { ...req.body };

    // If backend expects 'phone' (not 'phoneNo'), map it:
    if (body.phoneNo && !body.phone) body.phone = body.phoneNo;

    console.log("[proxy] sending JSON to upstream:", body);

    let upstream = await fetch("https://api.nakshatranamahacreations.in/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });

    let text = await upstream.text();
    console.log("[proxy] upstream(JSON) status:", upstream.status, "body:", text);

    // If upstream rejected JSON, retry as x-www-form-urlencoded
    if (upstream.status >= 400) {
      const params = new URLSearchParams();
      Object.entries(body).forEach(([k, v]) => params.append(k, String(v ?? "")));

      console.log("[proxy] retrying as x-www-form-urlencoded");
      upstream = await fetch("https://api.nakshatranamahacreations.in/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
        body: params,
      });

      text = await upstream.text();
      console.log("[proxy] upstream(URLENC) status:", upstream.status, "body:", text);
    }

    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }
    return res.status(upstream.status).json(data);
  } catch (err) {
    console.error("[proxy] error:", err);
    return res.status(500).json({ message: String(err) });
  }
}
