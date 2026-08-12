export const aboutTranslations = {
	en: {
		bio: [
			`I’m a composer, orchestrator and music producer focused on music for animation, film and interactive media. I hold a Bachelor’s Degree in Cinematic Music from the Pontifical Catholic University of Argentina (UCA), where I studied composition, orchestration, harmony, film scoring and music production.`,

			`I had the opportunity to compose and orchestrate original works that were rehearsed and performed by live ensembles. This gave me practical experience taking music beyond the mockup: preparing conductor scores and instrumental parts, attending rehearsals, communicating with conductors and performers, and hearing firsthand how musical decisions translate from the studio into live performance.`,

			`That experience became an important part of the way I approach scoring today. My background allows me to move through the complete musical process: Composition → Orchestration → Mockup Production → Score Preparation → Live Performance → Audio Post-Production.`,

			`My approach combines a strong classical foundation with modern music production. I adapt to the identity and creative direction of each project, whether developing a score from its initial musical concept through orchestration and production, or integrating into an existing music team to provide additional music, arrangements, orchestration, mockups, score preparation and other production support. My work is centered around musical storytelling. I’m particularly interested in animation and story-driven projects where music can contribute directly to character, atmosphere, pacing and worldbuilding. Stylistically, my work ranges from traditional orchestral writing to modern hybrid production.`,

			`My primary tools include Nuendo, Pro Tools, Ableton Live and Dorico, alongside professional production tools and virtual instruments. I also have experience with interactive-audio workflows using Wwise and FMOD.`,

			`I speak Spanish and English and I’m currently studying Japanese (JLPT N4). Based in Argentina, I’m available to work remotely with composers, directors, producers and creative teams internationally.`
		],

		servicesTitle: 'SERVICES',

		services: [
			{
				title: 'Music Composition & Scoring',
				description:
					'Original orchestral and hybrid music developed around the narrative, characters and visual identity of each project, from initial concept through final production and delivery.'
			},
			{
				title: 'Orchestration & Mockups',
				description:
					'Orchestration, arrangement, score preparation and detailed mockups for live or virtual production, working either from my own compositions or material provided by another composer.'
			},
			{
				title: 'Music Production & Additional Support',
				description:
					'Additional music, creative and technical feedback, editing, stem preparation and production support for composers and creative teams, available on a per-cue, episode or complete-project basis.'
			}
		]
	},

	ja: {
		bio: [
			`アニメーション、映像作品、インタラクティブメディアの音楽を中心に、作曲・オーケストレーション・音楽制作を行っています。アルゼンチン・カトリック大学（UCA）で映画音楽の学士号を取得し、作曲、オーケストレーション、和声、映像音楽、音楽制作を学びました。`,

			`これまでに自作曲の作曲・オーケストレーションを行い、実際のアンサンブルによるリハーサルと演奏を経験しました。指揮者用スコアや各楽器のパート譜の作成、リハーサルへの参加、指揮者や演奏者とのコミュニケーションを通して、モックアップ上での音楽的判断が実演でどのように響くのかを実践的に学びました。`,

			`この経験は、現在のスコアリングに対する考え方の大切な基盤となっています。作曲 → オーケストレーション → モックアップ制作 → スコア・パート譜作成 → 実演 → オーディオ・ポストプロダクションまで、一連の音楽制作工程に対応できます。`,

			`クラシック音楽を基盤としながら、現代的な音楽制作技術を組み合わせて制作しています。作品ごとの世界観やクリエイティブ・ディレクションを尊重し、音楽コンセプトの段階からオーケストレーション、プロダクションまで一貫して担当することも、既存の音楽チームに参加し、追加楽曲、アレンジ、オーケストレーション、モックアップ、スコア制作などのサポートを行うことも可能です。音楽によるストーリーテリングを大切にしており、特にアニメーションや物語性のある作品において、キャラクター、雰囲気、テンポ、世界観に音楽が直接関わることに強く関心があります。伝統的なオーケストラ音楽から現代的なハイブリッド・プロダクションまで、作品に応じて幅広く対応しています。`,

			`主な制作環境はNuendo、Pro Tools、Ableton Live、Doricoで、各種プロフェッショナル向け制作ツールやバーチャル・インストゥルメントも使用しています。また、WwiseとFMODを使用したインタラクティブ・オーディオのワークフロー経験もあります。`,

			`スペイン語と英語を使用でき、現在は日本語（JLPT N4）を学習中です。アルゼンチンを拠点に、作曲家、ディレクター、プロデューサー、クリエイティブチームとの国際的なリモートワークに対応しています。`
		],

		servicesTitle: 'サービス',

		services: [
			{
				title: '作曲・スコアリング',
				description:
					'作品の物語、キャラクター、ビジュアルの個性に合わせたオリジナルのオーケストラ／ハイブリッド音楽を、初期コンセプトから最終制作・納品まで一貫して制作します。'
			},
			{
				title: 'オーケストレーション・モックアップ制作',
				description:
					'自作曲または他の作曲家から提供された素材をもとに、実演・バーチャル制作の両方に対応したオーケストレーション、アレンジ、スコア・パート譜作成、詳細なモックアップ制作を行います。'
			},
			{
				title: '音楽制作・追加サポート',
				description:
					'作曲家やクリエイティブチーム向けに、追加楽曲、クリエイティブ面・技術面のフィードバック、編集、ステム制作・整理、その他の制作サポートを提供します。1キュー単位、エピソード単位、プロジェクト全体のいずれにも対応可能です。'
			}
		]
	}
} as const;

export type AboutLanguage = keyof typeof aboutTranslations;