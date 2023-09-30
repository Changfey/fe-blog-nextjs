export default async function handler(req, res) {
	try {
		if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
			return res.status(401).json({ message: "Invalid token" });
		}

		await res.revalidate(req.query.path);
		return res.json({ revalidated: true });
	} catch (err) {
		// return res.status(500).send("Error revalidating");
		return res.json({ revalidated: false });
	}
}
