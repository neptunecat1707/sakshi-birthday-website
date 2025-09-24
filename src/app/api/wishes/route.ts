import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { WishSlot } from '@/types';

const WISHES_FILE = path.join(process.cwd(), 'data', 'wishes.json');

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(WISHES_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Initialize with default slots if file doesn't exist
async function initializeWishes() {
  const initialSlots: WishSlot[] = [
    { id: '1', recipientName: 'Friend 1' },
    { id: '2', recipientName: 'Friend 2' },
    { id: '3', recipientName: 'Friend 3' },
    { id: '4', recipientName: 'Family Member 1' },
    { id: '5', recipientName: 'Family Member 2' },
    { id: '6', recipientName: 'Colleague 1' },
    { id: '7', recipientName: 'Colleague 2' },
    { id: '8', recipientName: 'Special Someone' },
    { id: '9', recipientName: 'Mystery Person' },
  ];

  await ensureDataDir();
  await fs.writeFile(WISHES_FILE, JSON.stringify(initialSlots, null, 2));
  return initialSlots;
}

export async function GET() {
  try {
    await ensureDataDir();
    
    let wishes: WishSlot[];
    try {
      const data = await fs.readFile(WISHES_FILE, 'utf8');
      wishes = JSON.parse(data);
    } catch {
      wishes = await initializeWishes();
    }

    return NextResponse.json(wishes);
  } catch (error) {
    console.error('Error reading wishes:', error);
    return NextResponse.json({ error: 'Failed to load wishes' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const wishes: WishSlot[] = await request.json();
    
    await ensureDataDir();
    await fs.writeFile(WISHES_FILE, JSON.stringify(wishes, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving wishes:', error);
    return NextResponse.json({ error: 'Failed to save wishes' }, { status: 500 });
  }
}