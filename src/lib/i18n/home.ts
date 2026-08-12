export const homeTranslations = {
	en: {
		summary: [
			`I’m a composer, orchestrator and music producer specializing in orchestral and hybrid music for animation, film and interactive media.`,

			`I hold a Bachelor’s Degree in Cinematic Music from the Pontifical Catholic University of Argentina (UCA), where I developed a strong foundation in composition, orchestration and music for visual media. My work combines that classical background with modern music production, allowing me to take music from its initial concept through orchestration, mockup production, score preparation, recording and post-production.`,

			`I’ve also had the opportunity to bring my own orchestral music from the studio to live performance, working directly with conductors and musicians during rehearsals and performances. That experience has shaped the way I write and produce music, keeping both the creative intention and the practical realities of performance in mind.`,

			`I can work independently on complete scores or as part of a larger music team, providing additional music, orchestration, arrangements, mockups and production support when needed.`,

			`I’m based in Argentina and available for international remote collaboration.`
		]
	},

	ja: {
		summary: [
			`アニメーション、映画、インタラクティブメディア向けのオーケストラ／ハイブリッド音楽を中心に、作曲・オーケストレーション・音楽制作を行っています。`,

			`アルゼンチン・カトリック大学（UCA）で映画音楽の学士号を取得し、作曲、オーケストレーション、映像音楽を中心に学びました。クラシックを基盤とした音楽的バックグラウンドと現代的な音楽制作を組み合わせ、音楽コンセプトの段階からオーケストレーション、モックアップ制作、スコア・パート譜作成、録音、ポストプロダクションまで一貫して対応できます。`,

			`また、自作のオーケストラ作品をスタジオ制作から実演まで発展させ、リハーサルや本番では指揮者や演奏者と直接コミュニケーションを取りながら制作を進めてきました。こうした経験は、創作上の意図と実演上の現実性の両方を意識した、現在の作曲・制作スタイルにつながっています。`,

			`楽曲制作全体を単独で担当することも、より大きな音楽チームの一員として、追加楽曲、オーケストレーション、アレンジ、モックアップ、その他の制作サポートを提供することも可能です。`,

			`アルゼンチンを拠点に、海外のプロジェクトとのリモートワークに対応しています。`
		]
	}
} as const;

export type HomeLanguage = keyof typeof homeTranslations;