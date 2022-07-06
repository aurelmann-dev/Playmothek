<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    // ~Home page~
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    // ~Lexique page~
    #[Route('/lexique', name: 'app_lexique')]
    public function lexique(): Response
    {
        return $this->render('main/lexique.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

       // ~Custom page~
       #[Route('/custom', name: 'app_custom')]
       public function custom(): Response
       {
           return $this->render('main/custom.html.twig', [
               'controller_name' => 'MainController',
           ]);
       }

          // ~Disassembly page~
    #[Route('/demont', name: 'app_demont')]
    public function demont(): Response
    {
        return $this->render('main/demont.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

       // ~Official Playmobil page~
       #[Route('/marque_offcielle', name: 'app_officielle')]
       public function officielle(): Response
       {
           return $this->render('main/officielle.html.twig', [
               'controller_name' => 'MainController',
           ]);
       }
}
