/** @param {NS} ns */
export async function main(ns) {
	const args = ns.flags([["help", false]]);
	const host = args._[0];
	const files = ns.ls(host, ".lit");
	const cctfiles = ns.ls(host, ".cct");
    	if (!ns.hasRootAccess(host)) {
			if (!ns.fileExists("remoteHack.js")) {
				await ns.wget("https://raw.githubusercontent.com/fheahdythdr/random-shit/main/funni%20bitburner%20things/remoteHack.js", "remoteHack.js", "home");
			}
			ns.toast("No root access, running remote hack..", "warning");
			ns.run("remoteHack.js", 1, host);
	}
	await ns.wget("https://raw.githubusercontent.com/fheahdythdr/random-shit/main/funni%20bitburner%20things/modifiedscp.js", "scp.js", host);
	ns.exec("scp.js",host,1);
	await ns.sleep(500);
	ns.rm("scp.js", host);
	ns.toast(`transferred ${files}, ${cctfiles} to home`);
	// await ns.scp("scp.js", "home")
}
