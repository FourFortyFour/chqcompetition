class ResponseParser:
    def __init__(self, response):
        self.responses = response
        self.fields = {}

    def stage_1(
        self,
    ):
        ini = self.responses["init"]
        splitup = ini.split("\n")
        splitup_2 = [ans[3:] for ans in splitup]
        meds = [
            medium.strip().lower().replace(" ", "-")
            for medium in splitup_2.pop().split(",")
        ]
        date = "NA"
        teacher_name = "Mian Humayun"

        self.fields = {
            "date": date,
            "teacher-name": teacher_name,
            "supporting-materials": meds,
        }

        for field in splitup_2:
            broken_field = field.split(":")
            self.fields[broken_field[0].lower().replace(" ", "-")] = broken_field[
                1
            ].strip()

    def stage_2(
        self,
    ):
        los = self.responses["LOs"]

        text = los

        # Split the text based on question headers
        sentences = los.split("\n")
        qs = ["knowledge", "skills", "understandings"]
        question_answer_dict = {
            "knowledge": [],
            "skills": [],
            "understandings": []
        }
        current_question = None
        curret_index = 0

        for sentence in sentences:
            if sentence.endswith("?") or sentence.endswith(":"):
                current_question = qs[curret_index]
                question_answer_dict[current_question] = []
                curret_index += 1
            elif current_question is not None:
                if sentence == "":
                    continue
                question_answer_dict[current_question].append(sentence)

        self.fields.update(question_answer_dict)

        ##Differentiation
        diff = self.responses["Differentiation"]

        text = diff

        # Split the text based on question headers
        sentences = diff.split("\n")

        question_answer_dict = {}
        current_question = None
        curret_index = 0
        qs = ["differentiation", "additional"]
        for sentence in sentences:
            if sentence.endswith("?") or sentence.endswith(":"):
                current_question = qs[curret_index]
                question_answer_dict[current_question] = []
                curret_index += 1
            elif current_question is not None:
                if sentence == "":
                    continue
                question_answer_dict[current_question].append(sentence)

        self.fields.update(question_answer_dict)

    def stage_3(
        self,
    ):
        les = [
            "prepare",
            "investigate",
            "apply",
            "connect",
            "evaluate",
            "assessment",
            "reflect",
        ]

        les_keys = ["Prepare", "Investigate", "Apply", "Improvement", "Connect", "Evaluate", "Assessment"]

        for i in range(len(les)):
            self.fields[les[i]] = self.responses[les_keys[i]]

    def parse(
        self,
    ):
        self.stage_1()
        self.stage_2()
        self.stage_3()

        return self.fields
