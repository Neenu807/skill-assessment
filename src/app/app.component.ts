
import { Component, NgModule, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentPage: number = 1;
  userAnswers: any = {};
  questions: any[] = [
    {
      question: 'Lost and Alone: What immediate actions will you take to ensure your safety?',
      options: [
        'Find a Secure Spot & Stay Put',
        'Explore a Little, Then Settle',
        'Keep Walking to Find the Group',
        'Use Forest Resources for a Makeshift Shelter'
      ]
    },
    
    {
      question: 'How will you attempt to signal or communicate your situation to the group using the resources around you?',
      options: [
        'Use a Whistle or Shout: Use a loud noise to draw attention',
        'Create Signal Markers: Use rocks, clothing, or bright items to mark your path',
        'Build a Signal Fire: Use dry leaves and twigs to create a small, controlled fire as a signal',
        'Use a Mirror or Flashlight to Signal: Use reflective items or a flashlight to catch attention, if available'
        
      ]
    },
    {
      question: 'Choosing a Direction: Will you follow the mysterious trail back to the starting point or venture forward to the mystical endpoint?',
      options: [
        'Retrace Steps to Starting Point Immediately',
        'Venture Forward to Endpoint, Relying on Intuition',
        'Pause and Assess Before Deciding',
        'Proceed Toward Endpoint, but Prepare for Contingencies',
        'Create a Makeshift Camp and Wait'
      ]
    },
    {
      question: 'Nightfall Approaches: As darkness falls and the forest whispers, what actions will you take to find shelter or continue your journey?',
      options: [
        'Build a Shelter Immediately: Using available resources, you decide to build a makeshift shelter right where you are',
        'Continue Moving Cautiously: You decide that the best course of action is to continue moving, albeit slowly and with heightened alertness',
        'Stay Put and Make Noise: You choose to stay in your current location but make occasional noises to scare away wild animals',
        'Consult Local Lore or Beliefs: Decide your action based on local stories, myths, or cultural norms about the forest (if you\'re aware of them). ',
        'Assess and Wait: Spend some time to assess the weather, potential dangers like wild animals, and your own physical and mental state before deciding the next action'
        
      ]
    },
    {
      question: 'A Crying Voice: Amidst the rustling leaves, you hear a faint crying voice that resembles a friend\'s. Do you follow it or stay put? What\'s your plan?',
      options: [
        'Investigate Cautiously: Decide to move towards the crying voice, taking care to prepare for potential risks and varying outcomes',
        'Call Out but Stay Put: Decide to verbally communicate towards the direction of the crying voice, but without moving from your current location',
        'Stay Put Due to Potential Danger: Decide not to take action based on weighing the potential risks involved, prioritizing personal safety',
        'Call Out and Move: Choose to verbally communicate and also move towards the direction of the crying voice, without significant consideration of the risks involved',
        'Consult Local Stories and Decide: Take into account local myths, stories, or cultural beliefs before deciding your course of action (if you\'re aware of them)'
        
      ]
    },
    {
      question: 'Sunrise in the Forest: As the first rays of the sun pierce through the canopy, what will be your first action? Describe your feelings and observations',
      options: [
        'Observing Surroundings: Taking the time to assess the environment around you, identify landmarks, and perhaps appreciate the natural beauty',
        'Continuing the Journey: Quickly deciding on new goals for the day, planning the most effective route, and motivating yourself for the journey ahead',
        'Expressing Gratitude or Relief: Taking a moment to reflect on the previous day\'s ordeal, finding inspiration and possibly connecting spiritually with nature',
        'Immersing in Local Rituals: If aware, partaking in or observing local cultural or spiritual rituals related to sunrise, finding a deeper connection with the place',
        'Creating Art or Journaling: Deciding to capture the moment through sketching, photography, or journaling to not just appreciate but also document your experiences'
        
      ]
    },
    {
      question: 'Reunion with the Group: You finally emerge from the forest and find the trekking group. What are your actions and emotions upon this joyful reunion?',
      options: [
        'Expressing Joy: Giving into the rush of emotions, hugging, crying, or celebrating with the group',
        'Sharing Experiences: Taking the opportunity to recount your ordeal, the lessons you\'ve learned, and how you felt during the experience',
        'Thanking Rescuers: Expressing your gratitude towards those who searched for you, recognizing their efforts and the importance of teamwork',
        'Quiet Reflection: Choosing to internalize your feelings, perhaps out of exhaustion or a sense of personal reflection',
        'Cultural Acknowledgement: Opting for a traditional or culturally appropriate expression of gratitude, joy, or reflection'
        
      ]
    }

  ];
  @NgModule({
    imports: [FlexLayoutModule],
  })

  ngOnInit() {
    
  }
  // Define the onStart function
  onStart() {
    // Add the logic you want to execute when the "Start" button is clicked.
    console.log('Start button clicked');
  }
  moveToPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  

}
