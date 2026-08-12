export const seoTranslations = {
	en: {
		'/': {
			title: 'Augusto Bosco | Composer & Orchestrator for Animation',
			description:
				'Composer, orchestrator and music producer specializing in orchestral and hybrid music for animation, film and interactive media. Available for international collaboration.'
		},

		'/about/': {
			title: 'About | Augusto Bosco — Composer & Orchestrator',
			description:
				'Learn about Augusto Bosco’s background in composition, orchestration, music production, live ensemble work and scoring for animation, film and interactive media.'
		},

		'/media/': {
			title: 'Media | Augusto Bosco — Music for Animation',
			description:
				'Explore Augusto Bosco’s portfolio of original orchestral works, animation scoring, live orchestra projects, orchestration and sound redesign.'
		},

		'/contact/': {
			title: 'Contact | Augusto Bosco — Composer & Orchestrator',
			description:
				'Contact Augusto Bosco for composition, orchestration, music production, additional music and international remote collaboration.'
		}
	},

	ja: {
		'/': {
			title:
				'Augusto Bosco（アウグスト・ボスコ）｜アニメ音楽 作曲・オーケストレーション',

			description:
				'アニメーション、映画、インタラクティブメディア向けの作曲・オーケストレーション・音楽制作。オーケストラ／ハイブリッド音楽を中心に、国際的なリモート制作に対応しています。'
		},

		'/about/': {
			title:
				'プロフィール｜Augusto Bosco（アウグスト・ボスコ）',

			description:
				'作曲家・オーケストレーター・音楽プロデューサー Augusto Bosco のプロフィール。作曲、オーケストレーション、モックアップ、スコア制作、実演、ポストプロダクションまでの制作経験を紹介します。'
		},

		'/media/': {
			title:
				'作品｜Augusto Bosco（アウグスト・ボスコ）｜アニメ音楽',

			description:
				'Augusto Bosco の音楽ポートフォリオ。オリジナル作品、アニメーション向けスコアリング、オーケストレーション、ライブ演奏作品、サウンドリデザインを掲載しています。'
		},

		'/contact/': {
			title:
				'お問い合わせ｜Augusto Bosco（アウグスト・ボスコ）',

			description:
				'作曲、オーケストレーション、音楽制作、コラボレーションのご相談はこちらから。Augusto Bosco へのお問い合わせフォームとメール連絡先をご案内しています。'
		}
	}
} as const;

export type SeoLanguage = keyof typeof seoTranslations;