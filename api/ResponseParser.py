class ResponseParser:
    def __init__(self, response):
        self.responses = response
        self.fields = {}

    def stage_1(
        self,
    ):
        ini = self.responses[0]
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
        los = self.responses[1]

        text = los

        # Split the text based on question headers
        sentences = los.split("\n")
        qs = ["knowledge", "skills", "understandings"]
        question_answer_dict = {}
        current_question = None
        curret_index = 0

        for sentence in sentences:
            if sentence.endswith('?'):
                current_question = qs[curret_index]
                question_answer_dict[current_question] = []
                curret_index += 1
            elif current_question is not None:
                if sentence == '':
                    continue
                question_answer_dict[current_question].append(sentence)

        self.fields.update(question_answer_dict)

        ##Differentiation
        diff = self.responses[2]

        text = diff

        # Split the text based on question headers
        sentences = diff.split("\n")

        question_answer_dict = {}
        current_question = None
        curret_index = 0
        qs = ["differentiation", "additional"]
        for sentence in sentences:
            if sentence.endswith('?'):
                current_question = qs[curret_index]
                question_answer_dict[current_question] = []
                curret_index += 1
            elif current_question is not None:
                if sentence == '':
                    continue
                question_answer_dict[current_question].append(sentence)

        self.fields.update(question_answer_dict)

    def stage_3(
        self,
    ):
        les = [
            "prepare",
            "plan",
            "investigate",
            "apply",
            "connect",
            "evaluate",
            "assessment",
            "reflect",
        ]

        for i in range(3, 11):
            self.fields[les[i - 3]] = self.responses[i]

    def parse(
        self,
    ):
        self.stage_1()
        self.stage_2()
        self.stage_3()

        return self.fields
