export const contactTranslations = {
	en: {
		kicker: 'GET IN TOUCH',

		title: 'Let’s create something together.',

		description:
			'Have a project, collaboration or idea in mind? Send me a message and I’ll get back to you.',

		form: {
			nameLabel: 'NAME',
			namePlaceholder: 'Your name',

			emailLabel: 'EMAIL',
			emailPlaceholder: 'you@email.com',

			messageLabel: 'MESSAGE',
			messagePlaceholder: 'Tell me a little about your project...',

			note: 'I’ll only use your email to reply to your message.',

			send: 'SEND MESSAGE',
			sending: 'SENDING...',

			error:
				'Something went wrong. Please try again, or email me directly below.'
		},

		success: {
			title: 'MESSAGE SENT',

			description:
				'Thank you for reaching out. I’ll get back to you as soon as possible.',

			sendAnother: 'SEND ANOTHER MESSAGE'
		},

		directEmail: 'OR EMAIL ME DIRECTLY'
	},

	ja: {
		kicker: 'お問い合わせ',

		title: '一緒に作品をつくりましょう。',

		description:
			'プロジェクトやコラボレーションのご相談、アイデアについてなど、お気軽にメッセージをお送りください。確認後、返信いたします。',

		form: {
			nameLabel: 'お名前',
			namePlaceholder: 'お名前',

			emailLabel: 'メールアドレス',
			emailPlaceholder: 'you@email.com',

			messageLabel: 'メッセージ',
			messagePlaceholder: 'プロジェクトについて簡単にお聞かせください...',

			note: '入力いただいたメールアドレスは、返信のためにのみ使用します。',

			send: 'メッセージを送信',
			sending: '送信中...',

			error:
				'送信中にエラーが発生しました。もう一度お試しいただくか、下記のメールアドレスから直接ご連絡ください。'
		},

		success: {
			title: 'メッセージを送信しました',

			description:
				'お問い合わせありがとうございます。確認後、できるだけ早く返信いたします。',

			sendAnother: '新しいメッセージを送る'
		},

		directEmail: 'またはメールで直接お問い合わせください'
	}
} as const;

export type ContactLanguage = keyof typeof contactTranslations;