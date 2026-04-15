import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../src/models/user.model.js";
import "dotenv/config";

const seedUsers = [
  {
    fullName: "Alice Johnson",
    email: "alice@example.com",
    password: "alice123",
    profilePic: "https://i.pravatar.cc/150?img=1",
  },
  {
    fullName: "Bob Smith",
    email: "bob@example.com",
    password: "bob123",
    profilePic: "https://i.pravatar.cc/150?img=2",
  },
  {
    fullName: "Charlie Brown",
    email: "charlie@example.com",
    password: "charlie123",
    profilePic: "https://i.pravatar.cc/150?img=3",
  },
  {
    fullName: "Diana Prince",
    email: "diana@example.com",
    password: "diana123",
    profilePic: "https://i.pravatar.cc/150?img=4",
  },
  {
    fullName: "Eve Wilson",
    email: "eve@example.com",
    password: "eve123",
    profilePic: "https://i.pravatar.cc/150?img=5",
  },
  {
    fullName: "Frank Miller",
    email: "frank@example.com",
    password: "frank123",
    profilePic: "https://i.pravatar.cc/150?img=6",
  },
  {
    fullName: "Grace Lee",
    email: "grace@example.com",
    password: "grace123",
    profilePic: "https://i.pravatar.cc/150?img=7",
  },
  {
    fullName: "Henry Davis",
    email: "henry@example.com",
    password: "henry123",
    profilePic: "https://i.pravatar.cc/150?img=8",
  },
  {
    fullName: "Ivy Chen",
    email: "ivy@example.com",
    password: "ivy123",
    profilePic: "https://i.pravatar.cc/150?img=9",
  },
  {
    fullName: "Jack Taylor",
    email: "jack@example.com",
    password: "jack123",
    profilePic: "https://i.pravatar.cc/150?img=10",
  },
  {
    fullName: "Karen White",
    email: "karen@example.com",
    password: "karen123",
    profilePic: "https://i.pravatar.cc/150?img=11",
  },
  {
    fullName: "Leo Martinez",
    email: "leo@example.com",
    password: "leo123",
    profilePic: "https://i.pravatar.cc/150?img=12",
  },
  {
    fullName: "Mia Anderson",
    email: "mia@example.com",
    password: "mia123",
    profilePic: "https://i.pravatar.cc/150?img=13",
  },
  {
    fullName: "Nathan Garcia",
    email: "nathan@example.com",
    password: "nathan123",
    profilePic: "https://i.pravatar.cc/150?img=14",
  },
  {
    fullName: "Olivia Thomas",
    email: "olivia@example.com",
    password: "olivia123",
    profilePic: "https://i.pravatar.cc/150?img=15",
  },
];

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");

    // Xóa tất cả user
    await User.deleteMany({});
    console.log("✓ Deleted all users");

    // Tạo 15 user mới
    const hashedUsers = await Promise.all(
      seedUsers.map(async (user) => {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        return {
          ...user,
          password: hashedPassword,
        };
      }),
    );

    await User.insertMany(hashedUsers);
    console.log("✓ Created 15 new users");

    console.log("\n=== User Credentials ===\n");
    seedUsers.forEach((user, idx) => {
      console.log(`${idx + 1}. ${user.fullName}`);
      console.log(`   Email: ${user.email}`);
      console.log(`   Password: ${user.password}`);
      console.log(`   Avatar: ${user.profilePic}`);
      console.log("");
    });

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main();
