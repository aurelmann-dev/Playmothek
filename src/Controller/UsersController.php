<?php

namespace App\Controller;


use App\Form\EditProfilType;
use App\Form\PageUserEditType;
use App\Repository\PagesRepository;
use App\Repository\UsersRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[Route('/users')]
class UsersController extends AbstractController
{
    // ~Page profil user connected~
    #[Route('/page_user/{id}', name: 'app_users_connected', methods: ['GET', 'POST'])]
    public function userConnected(UsersRepository $usersRepository, $id, pagesRepository $pagesRepository): Response
    {
        $user = $this->getUser();
        $id = $user->getId();
        $page = $pagesRepository->findOneBy(['user' => $id]);

        return $this->render('users/profil/show_user_connected.html.twig', [
            'users' => $usersRepository->findAll(),
        ]);
    }

    // ~Edit Profil user connected~
    #[Route('/profil/edit/{id}', name: 'app_profil_edit', methods: ['GET', 'POST'])]
    public function editProfil(Request $request, ManagerRegistry  $doctrine, $id): Response
    {
        $user  = $this->getUser();
        $id = $user->getId();

        $form = $this->createForm(EditProfilType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $doctrine->getManager();
            $em->persist($user);
            $em->flush();

            $this->addFlash('update_profil', 'Profil mis à jour !');
            return $this->redirectToRoute('app_users_connected',  ['id' => $id]);
        }

        return $this->renderForm('users/profil/edit_user_connected.html.twig', [
            'form' => $form,
        ]);
    }

    // ~Edit Actuality Profil user connected~
    #[Route('/edit/actuality/{page}', name: 'app_actu_edit', methods: ['GET', 'POST'])]
    public function editActuality(Request $request, PagesRepository $pagesRepository, $page)
    {
        $user  = $this->getUser();
        $page = $user->getPage();

        // dd($page);

        $form = $this->createForm(PageUserEditType::class, $page);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $pagesRepository->add($page, true);

            $this->addFlash('update_profil', 'Profil mis à jour !');
            // return $this->redirectToRoute('app_users_connected',  ['page' => $page]);
            return $this->redirectToRoute('app_home');
        }

        return $this->renderForm('users/profil/edit_user_connected.html.twig', [
            'form' => $form,
        ]);
    }

    // ~Edit Password user connected~
    #[Route('/password/edit/{id}', name: 'app_password_edit', methods: ['GET', 'POST'])]
    public function editPasswordl(Request $request, ManagerRegistry  $doctrine, UserPasswordHasherInterface $passwordEncoder): Response
    {
        $user  = $this->getUser();
        $id = $user->getId();

        //~checkmethod post~
        if ($request->isMethod('POST')) {
            $em = $doctrine->getManager();

            //~check two password identical~
            if ($request->request->get('newpass') == $request->request->get('newpass2')) {

                //~stock & hash new password~
                $user->setPassword($passwordEncoder->hashPassword($user, $request->request->get('newpass')));
                $em->flush();

                $this->addFlash('password_success', 'Mot de mot mis à jour avec succés !');

                return $this->redirectToRoute('app_users_connected',  ['id' => $id]);
            } else {
                $this->addFlash('password_error', 'Les deux mots de passe ne sont pas identiques.');
            }
        }

        return $this->renderForm('users/profil/edit_pass.html.twig', []);
    }
}
