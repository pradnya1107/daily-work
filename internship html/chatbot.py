from flask import Flask, request, jsonify

app = Flask(__name__)

# Memory (Agentic feature)
memory = []

@app.route("/chat", methods=["POST"])
def chat():
    user_msg = request.json["message"]
    memory.append("User: " + user_msg)

    # Agent decision making
    if "plan" in user_msg.lower():
        reply = "1. Analyze task\n2. Design\n3. Execute\n4. Test"
    elif "calculate" in user_msg.lower():
        try:
            result = eval(user_msg.replace("calculate", ""))
            reply = f"Result is {result}"
        except:
            reply = "Invalid calculation"
    else:
        reply = "I am thinking like an agent..."

    memory.append("Bot: " + reply)
    return jsonify({"reply": reply})

app.run(debug=True)
