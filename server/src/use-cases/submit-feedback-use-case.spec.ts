import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

describe('Submit Feedback', () => {
    it('should be avlwe to submit a feedback', async () => {
        const submitFeedbackUseCase = new SubmitFeedbackUseCase(
            {create: async () => {}},
            {sendMail: async () => {}}
        )

       await expect(submitFeedbackUseCase.execute({
            type: 'bugs',
            comment: 'This is a bug',
            screenshot: 'data:image/png;base64,sdkjshdksahdksdhhkjsadsh'
        })).resolves.not.toThrow()
    })
})