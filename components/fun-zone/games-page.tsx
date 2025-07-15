"use client";

// import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Gamepad2,
  Trophy,
  Star,
  Play,
  Users,
  Clock,
  Target,
  Brain,
  Heart,
  Share2,
  Award,
  Zap,
  Crown,
  Medal,
} from "lucide-react";

interface Game {
  id: string;
  title: string;
  description: string;
  category: "Quiz" | "Simulation" | "Matching" | "Challenge";
  difficulty: "Easy" | "Medium" | "Hard";
  duration: string;
  players: number;
  rating: number;
  image: string;
  features: string[];
  educationalFacts: string[];
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  progress: number;
  maxProgress: number;
  unlocked: boolean;
}

interface LeaderboardEntry {
  rank: number;
  username: string;
  avatar: string;
  score: number;
  gamesPlayed: number;
  achievements: number;
}

const games: Game[] = [
  {
    id: "blood-type-matching",
    title: "Blood Type Matching Game",
    description:
      "Match blood types with compatible donors and recipients in this fast-paced puzzle game",
    category: "Matching",
    difficulty: "Medium",
    duration: "5-10 min",
    players: 1247,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=300",
    features: [
      "Real-time matching",
      "Progressive difficulty",
      "Educational tips",
      "Score multipliers",
    ],
    educationalFacts: [
      "O-negative is the universal donor blood type",
      "AB-positive is the universal recipient blood type",
      "Blood type compatibility is crucial for safe transfusions",
    ],
  },
  {
    id: "donation-process-quiz",
    title: "Donation Process Quiz",
    description:
      "Test your knowledge about the blood donation process with interactive questions",
    category: "Quiz",
    difficulty: "Easy",
    duration: "3-5 min",
    players: 2156,
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=300",
    features: [
      "Multiple choice questions",
      "Instant feedback",
      "Progress tracking",
      "Fact explanations",
    ],
    educationalFacts: [
      "Blood donation takes only 8-10 minutes",
      "You can donate every 56 days",
      "One donation can save up to 3 lives",
    ],
  },
  {
    id: "health-facts-trivia",
    title: "Health Facts Trivia",
    description:
      "Challenge yourself with fascinating health and blood-related trivia questions",
    category: "Quiz",
    difficulty: "Hard",
    duration: "10-15 min",
    players: 892,
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=300",
    features: [
      "Timed questions",
      "Bonus rounds",
      "Difficulty scaling",
      "Expert mode",
    ],
    educationalFacts: [
      "The human body contains about 5 liters of blood",
      "Blood makes up 7% of your body weight",
      "Red blood cells live for about 120 days",
    ],
  },
  {
    id: "virtual-blood-drive",
    title: "Virtual Blood Drive Simulator",
    description:
      "Manage your own virtual blood drive and learn about logistics and coordination",
    category: "Simulation",
    difficulty: "Medium",
    duration: "15-20 min",
    players: 634,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=300",
    features: [
      "Resource management",
      "Event planning",
      "Donor coordination",
      "Impact tracking",
    ],
    educationalFacts: [
      "Blood drives require careful planning and coordination",
      "Mobile blood drives can reach underserved communities",
      "Volunteer coordination is essential for successful drives",
    ],
  },
  {
    id: "myth-vs-fact",
    title: "Myth vs Fact Challenge",
    description:
      "Separate blood donation myths from facts in this educational challenge",
    category: "Challenge",
    difficulty: "Easy",
    duration: "5-8 min",
    players: 1543,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=300",
    features: [
      "True/False format",
      "Myth explanations",
      "Fact verification",
      "Social sharing",
    ],
    educationalFacts: [
      "Many myths prevent people from donating blood",
      "Education helps dispel common misconceptions",
      "Facts empower people to make informed decisions",
    ],
  },
];

const achievements: Achievement[] = [
  {
    id: "first-game",
    title: "Getting Started",
    description: "Play your first game",
    icon: "🎮",
    rarity: "Common",
    progress: 1,
    maxProgress: 1,
    unlocked: true,
  },
  {
    id: "quiz-master",
    title: "Quiz Master",
    description: "Score 100% on 5 different quizzes",
    icon: "🧠",
    rarity: "Rare",
    progress: 3,
    maxProgress: 5,
    unlocked: false,
  },
  {
    id: "blood-expert",
    title: "Blood Expert",
    description: "Complete all educational games",
    icon: "🩸",
    rarity: "Epic",
    progress: 2,
    maxProgress: 5,
    unlocked: false,
  },
  {
    id: "sharing-champion",
    title: "Sharing Champion",
    description: "Share 10 game results on social media",
    icon: "📱",
    rarity: "Rare",
    progress: 7,
    maxProgress: 10,
    unlocked: false,
  },
  {
    id: "leaderboard-legend",
    title: "Leaderboard Legend",
    description: "Reach top 10 in global leaderboard",
    icon: "👑",
    rarity: "Legendary",
    progress: 0,
    maxProgress: 1,
    unlocked: false,
  },
];

const leaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    username: "BloodHero2024",
    avatar: "/placeholder.svg?height=40&width=40",
    score: 15420,
    gamesPlayed: 127,
    achievements: 12,
  },
  {
    rank: 2,
    username: "HealthChampion",
    avatar: "/placeholder.svg?height=40&width=40",
    score: 14890,
    gamesPlayed: 98,
    achievements: 10,
  },
  {
    rank: 3,
    username: "QuizMaster99",
    avatar: "/placeholder.svg?height=40&width=40",
    score: 13567,
    gamesPlayed: 156,
    achievements: 15,
  },
  {
    rank: 4,
    username: "DonorAdvocate",
    avatar: "/placeholder.svg?height=40&width=40",
    score: 12234,
    gamesPlayed: 89,
    achievements: 8,
  },
  {
    rank: 5,
    username: "LifeSaver2023",
    avatar: "/placeholder.svg?height=40&width=40",
    score: 11890,
    gamesPlayed: 134,
    achievements: 11,
  },
];

export function GamesPage() {
  // const [selectedGame, setSelectedGame] = useState<Game | null>(null)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Quiz":
        return Brain;
      case "Simulation":
        return Target;
      case "Matching":
        return Heart;
      case "Challenge":
        return Zap;
      default:
        return Gamepad2;
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-100 text-gray-800";
      case "Rare":
        return "bg-blue-100 text-blue-800";
      case "Epic":
        return "bg-purple-100 text-purple-800";
      case "Legendary":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Educational Games</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn about blood donation through fun, interactive games. Earn
          achievements, compete on leaderboards, and share your knowledge with
          friends.
        </p>
      </section>

      {/* Games Overview */}
      <section>
        <Tabs defaultValue="games" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="games" className="flex items-center gap-2">
              <Gamepad2 className="h-4 w-4" />
              Games
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="flex items-center gap-2"
            >
              <Trophy className="h-4 w-4" />
              Achievements
            </TabsTrigger>
            <TabsTrigger
              value="leaderboard"
              className="flex items-center gap-2"
            >
              <Crown className="h-4 w-4" />
              Leaderboard
            </TabsTrigger>
          </TabsList>

          {/* Games Tab */}
          <TabsContent value="games" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game) => {
                const CategoryIcon = getCategoryIcon(game.category);
                return (
                  <Card
                    key={game.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="relative aspect-video">
                      <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                        <CategoryIcon className="h-16 w-16 text-red-600" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className={getDifficultyColor(game.difficulty)}>
                          {game.difficulty}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90">
                          <Star className="h-3 w-3 mr-1 fill-current text-yellow-500" />
                          {game.rating}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">
                            {game.title}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {game.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{game.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{game.players.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">Features:</h5>
                        <div className="flex flex-wrap gap-1">
                          {game.features.slice(0, 2).map((feature, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                          {game.features.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{game.features.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-red-600 hover:bg-red-700">
                          <Play className="h-4 w-4 mr-2" />
                          Play Now
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-transparent"
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Educational Facts Section */}
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-blue-600" />
                  Did You Know?
                </CardTitle>
                <CardDescription>
                  Learn interesting facts while you play!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {games
                    .flatMap((game) => game.educationalFacts)
                    .slice(0, 6)
                    .map((fact, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 p-3 bg-white rounded-lg"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm">{fact}</p>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className={`overflow-hidden transition-all ${
                    achievement.unlocked
                      ? "bg-gradient-to-br from-yellow-50 to-yellow-100"
                      : "opacity-75"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{achievement.icon}</div>
                        <div>
                          <CardTitle className="text-lg">
                            {achievement.title}
                          </CardTitle>
                          <CardDescription>
                            {achievement.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getRarityColor(achievement.rarity)}>
                        {achievement.rarity}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>
                          {achievement.progress}/{achievement.maxProgress}
                        </span>
                      </div>
                      <Progress
                        value={
                          (achievement.progress / achievement.maxProgress) * 100
                        }
                        className="h-2"
                      />
                    </div>
                    {achievement.unlocked && (
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <Award className="h-4 w-4" />
                        <span>Unlocked!</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Achievement Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Achievement Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {achievements.filter((a) => a.unlocked).length}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Unlocked
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {achievements.length}
                    </div>
                    <div className="text-sm text-muted-foreground">Total</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {Math.round(
                        (achievements.filter((a) => a.unlocked).length /
                          achievements.length) *
                          100
                      )}
                      %
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Completion
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      {
                        achievements.filter(
                          (a) => a.rarity === "Legendary" && a.unlocked
                        ).length
                      }
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Legendary
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  Global Leaderboard
                </CardTitle>
                <CardDescription>
                  Top players from around the world
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((entry) => (
                    <div
                      key={entry.rank}
                      className={`flex items-center gap-4 p-4 rounded-lg border ${
                        entry.rank <= 3
                          ? "bg-gradient-to-r from-yellow-50 to-yellow-100"
                          : "bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            entry.rank === 1
                              ? "bg-yellow-500 text-white"
                              : entry.rank === 2
                              ? "bg-gray-400 text-white"
                              : entry.rank === 3
                              ? "bg-orange-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {entry.rank <= 3 ? (
                            entry.rank === 1 ? (
                              <Crown className="h-4 w-4" />
                            ) : (
                              <Medal className="h-4 w-4" />
                            )
                          ) : (
                            entry.rank
                          )}
                        </div>
                        <Avatar>
                          <AvatarImage
                            src={entry.avatar || "/placeholder.svg"}
                            alt={entry.username}
                          />
                          <AvatarFallback>
                            {entry.username
                              .split("")
                              .slice(0, 2)
                              .join("")
                              .toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{entry.username}</p>
                          <p className="text-sm text-muted-foreground">
                            {entry.gamesPlayed} games • {entry.achievements}{" "}
                            achievements
                          </p>
                        </div>
                      </div>
                      <div className="ml-auto text-right">
                        <p className="text-lg font-bold">
                          {entry.score.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground">points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Your Rank */}
            <Card className="bg-gradient-to-r from-red-50 to-red-100">
              <CardHeader>
                <CardTitle>Your Current Rank</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      #42
                    </div>
                    <div>
                      <p className="font-medium">You</p>
                      <p className="text-sm text-muted-foreground">
                        Keep playing to climb higher!
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">8,450</p>
                    <p className="text-sm text-muted-foreground">points</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
